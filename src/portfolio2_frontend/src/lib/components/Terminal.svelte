<script>
  let commandHistory = ['Welcome to my portfolio terminal!'];
  let currentCommand = '';

  const commands = {
    help: 'Available commands: help, cv, portfolio',
    cv: 'Downloading CV.pdf...',
    portfolio: 'Portfolio websites:\nwww.dittoicp.com\nwww.desktop.windoge98.com'
  };

  function handleKeydown(event) {
    if (event.key === 'Enter') {
      commandHistory = [...commandHistory, `$ ${currentCommand}`];
      
      const command = currentCommand.toLowerCase().trim();
      if (commands[command]) {
        commandHistory = [...commandHistory, commands[command]];
      } else if (command) {
        commandHistory = [...commandHistory, `Command not found: ${command}`];
      }

      currentCommand = '';
    }
  }
</script>

<div class="bg-gray-900 text-green-400 p-4 h-screen overflow-auto font-mono text-sm">
  {#each commandHistory as line}
    <div class="mb-1">{line}</div>
  {/each}
  <div class="flex">
    <span>$&nbsp;</span>
    <input
      bind:value={currentCommand}
      on:keydown={handleKeydown}
      class="bg-transparent outline-none flex-grow text-green-400"
      type="text"
      autofocus
    />
  </div>
</div>
