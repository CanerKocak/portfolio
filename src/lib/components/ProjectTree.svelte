<script>
  import { slide } from 'svelte/transition';

  export let files;
  export let selectedFile;
  
  let isOpen = true;
  
  function toggleOpen() {
    isOpen = !isOpen;
  }

  function selectFile(file) {
    selectedFile.set(file);
  }

</script>

<div class="p-4 text-gray-300">
  <div class="flex items-center cursor-pointer" on:click={toggleOpen}>
    <span class="mr-1">{isOpen ? '▼' : '▶'}</span>
    <span class="mr-1">📁</span>
    <span>src</span>
  </div>
  {#if isOpen}
    <div class="ml-4 mt-2" transition:slide={{ duration: 200 }}>
      {#each Object.keys(files) as file}
<div
  class="flex items-center cursor-pointer py-1 px-2 rounded {$selectedFile === file ? 'bg-white text-black font-bold' : 'text-gray-300 hover:bg-gray-700'}"
  on:click={() => selectFile(file)}
>

          <span class="mr-1">📄</span>
          <span>{file}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  div {
    user-select: none;
  }
</style>
