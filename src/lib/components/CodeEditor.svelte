<script>
  import { onMount } from 'svelte';
  import { EditorView, basicSetup } from 'codemirror';
  import { rust } from '@codemirror/lang-rust';
  import { oneDark } from '@codemirror/theme-one-dark';
  import { lineNumbers } from '@codemirror/view';
  import { EditorState } from '@codemirror/state';

  export let content = '';
  export let isMobile = false;
  let element;
  let editor;

  $: if (editor && content !== editor.state.doc.toString()) {
    editor.dispatch({
      changes: { from: 0, to: editor.state.doc.length, insert: content }
    });
  }

  $: if (editor && isMobile !== undefined) {
    updateEditorFontSize();
  }

  onMount(() => {
    initializeEditor();

    return () => {
      editor?.destroy();
    };
  });

  function initializeEditor() {
    const startState = EditorState.create({
      doc: content,
      extensions: [
        basicSetup,
        rust(),
        oneDark,
        lineNumbers(),
        EditorState.tabSize.of(4),
        EditorView.updateListener.of(handleEditorUpdate),
      ],
    });

    editor = new EditorView({
      state: startState,
      parent: element,
    });

    updateEditorFontSize();
  }

  function handleEditorUpdate(update) {
    if (update.docChanged) {
      content = update.state.doc.toString();
    }
  }

  function updateEditorFontSize() {
    if (editor) {
      editor.dom.style.fontSize = isMobile ? '12px' : '14px';
    }
  }
</script>

<div class="editor-container" class:mobile={isMobile} bind:this={element}></div>

<style>
  .editor-container {
    height: 100%;
    overflow: auto;
  }

  :global(.cm-editor) {
    height: 100%;
    font-family: 'Fira Code', monospace;
    font-size: 14px;
  }

  :global(.cm-scroller) {
    overflow: auto;
    max-height: 100%;
  }

  .editor-container.mobile :global(.cm-editor) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    .editor-container {
      max-height: 60vh;
    }
  }
</style>
