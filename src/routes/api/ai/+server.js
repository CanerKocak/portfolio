import { files } from "$lib/stores/files";
import { get } from "svelte/store";
import Anthropic from "@anthropic-ai/sdk";

export async function POST({ request }) {
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  const { message } = await request.json();

  const filesContent = get(files);

  const filesString = Object.entries(filesContent)
    .map(([filename, content]) => `${filename}:\n${content}`)
    .join("\n\n");


  const stream = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 485,
    temperature: 0,
    system: "you will act as a portfolio guide explaining the info u have in the files\n\n${filesString}",
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
    stream: true,
  });

  const textEncoder = new TextEncoder();

  return new Response(
    new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const text = chunk.delta?.text ?? "";
          controller.enqueue(
            textEncoder.encode(JSON.stringify({ reply: text }))
          );
        }
        controller.close();
      },
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
