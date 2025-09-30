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

  function getFileIcon(filename) {
    if (filename === 'projects.rs') return '🚀';
    if (filename === 'skills.rs') return '⚡';
    if (filename === 'contact.rs') return '📧';
    return '📄';
  }

</script>

<div class="tree-container">
  <div class="folder" on:click={toggleOpen}>
    <span class="arrow">{isOpen ? '▼' : '▶'}</span>
    <span class="folder-icon">📁</span>
    <span class="folder-name">portfolio</span>
  </div>
  {#if isOpen}
    <div class="files" transition:slide={{ duration: 200 }}>
      {#each Object.keys(files) as file}
        <div
          class="file {$selectedFile === file ? 'active' : ''}"
          on:click={() => selectFile(file)}
        >
          <span class="file-icon">{getFileIcon(file)}</span>
          <span class="file-name">{file}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .tree-container {
    padding: 12px 8px;
    color: #cccccc;
    user-select: none;
    font-size: 13px;
  }

  .folder {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 6px 8px;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  .folder:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

  .arrow {
    margin-right: 4px;
    font-size: 10px;
    transition: transform 0.2s;
  }

  .folder-icon {
    margin-right: 6px;
  }

  .folder-name {
    font-weight: 500;
    color: #ffffff;
  }

  .files {
    margin-left: 16px;
    margin-top: 4px;
  }

  .file {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 6px 8px;
    border-radius: 4px;
    transition: all 0.2s;
    margin: 2px 0;
  }

  .file:hover {
    background-color: rgba(255, 255, 255, 0.08);
    transform: translateX(2px);
  }

  .file.active {
    background-color: #007acc;
    color: #ffffff;
    font-weight: 500;
  }

  .file.active .file-name {
    color: #ffffff;
  }

  .file-icon {
    margin-right: 8px;
    font-size: 14px;
  }

  .file-name {
    color: #cccccc;
    transition: color 0.2s;
  }

  .file:hover .file-name {
    color: #ffffff;
  }
</style>
