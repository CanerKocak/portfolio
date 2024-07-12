<script>
  let commandHistory = ['$ rustc --version', 'rustc 1.57.0 (f1edd0429 2021-11-29)'];
  let currentCommand = '';

  function handleKeydown(event) {
    if (event.key === 'Enter') {
      commandHistory = [...commandHistory, `$ ${currentCommand}`, 'Command executed (simulated)'];
      currentCommand = '';
    }
  }
</script>

<div class="bg-gray-800 text-green-400 p-4 h-full overflow-auto font-mono text-sm">
  {#each commandHistory as command}
    <div>{command}</div>
  {/each}
  <div class="flex">
    <span>$&nbsp;</span>
    <input
      bind:value={currentCommand}
      on:keydown={handleKeydown}
      class="bg-transparent outline-none flex-grow"
      type="text"
    />
  </div>
</div>
