<script>
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';
  import { spring } from 'svelte/motion';
  import ProjectTree from '$lib/components/ProjectTree.svelte';
  import CodeEditor from '$lib/components/CodeEditor.svelte';
  import Terminal from '$lib/components/Terminal.svelte';
  import TopBar from '$lib/components/TopBar.svelte';
  import Clock from '$lib/components/Clock.svelte';
  import { files } from '$lib/stores/files.js';
  import "../app.css";

  const selectedFile = writable('contact.rs');

  let isTerminalVisible = writable(true);
  let terminalHeight = writable(200);
  let projectTreeWidth = spring(250);
  let isDragging = false;
  let isMobile = writable(false);
  let isProjectTreeVisible = writable(true);

  function toggleTerminal() {
    isTerminalVisible.update(value => !value);
  }

  function handleTerminalMousedown(event) {
    const startY = event.clientY;
    const startHeight = $terminalHeight;

    function handleMousemove(moveEvent) {
      const deltaY = startY - moveEvent.clientY;
      terminalHeight.set(Math.max(50, Math.min(400, startHeight + deltaY)));
    }

    function handleMouseup() {
      window.removeEventListener('mousemove', handleMousemove);
      window.removeEventListener('mouseup', handleMouseup);
    }

    window.addEventListener('mousemove', handleMousemove);
    window.addEventListener('mouseup', handleMouseup);
  }

  function handleProjectTreeMousedown(event) {
    if ($isMobile) return;
    isDragging = true;
    const startX = event.clientX;
    const startWidth = $projectTreeWidth;

    function handleMousemove(moveEvent) {
      if (isDragging) {
        const deltaX = moveEvent.clientX - startX;
        projectTreeWidth.set(Math.max(150, Math.min(500, startWidth + deltaX)));
      }
    }

    function handleMouseup() {
      isDragging = false;
      window.removeEventListener('mousemove', handleMousemove);
      window.removeEventListener('mouseup', handleMouseup);
    }

    window.addEventListener('mousemove', handleMousemove);
    window.addEventListener('mouseup', handleMouseup);
  }

  onMount(() => {
    const handleKeydown = (event) => {
      if (event.ctrlKey && event.key === '`') {
        toggleTerminal();
      }
    };

    const checkMobile = () => {
      isMobile.set(window.innerWidth <= 768);
      if ($isMobile) {
        isProjectTreeVisible.set(false);
        isTerminalVisible.set(false);
      } else {
        isProjectTreeVisible.set(true);
        isTerminalVisible.set(true);
      }
    };

    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('resize', checkMobile);
    checkMobile();

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('resize', checkMobile);
    };
  });
</script>

<div class="ide-container">
  <TopBar />
  <div class="ide-main">
    {#if $isProjectTreeVisible && !$isMobile}
      <div class="project-tree" style="width: {$projectTreeWidth}px;">
        <ProjectTree files={$files} {selectedFile} />
      </div>
    {/if}
    {#if !$isMobile}
      <div class="project-tree-resizer" on:mousedown={handleProjectTreeMousedown}></div>
    {/if}
    <div class="code-area">
      <div class="tabs">
        {#each Object.keys($files) as file}
          <button
            class="tab {$selectedFile === file ? 'active' : ''}"
            on:click={() => selectedFile.set(file)}
          >
            {file}
          </button>
        {/each}
      </div>
      <div class="editor" class:full-height={$isMobile}>
        <CodeEditor content={$files[$selectedFile]} isMobile={$isMobile} />
      </div>
      {#if $isTerminalVisible && !$isMobile}
        <div class="terminal-resizer" on:mousedown={handleTerminalMousedown}></div>
        <div class="terminal" style="height: {$terminalHeight}px;">
          <Terminal />
        </div>
      {/if}
    </div>
  </div>
</div>
<Clock />

<style>
  .ide-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: #1e1e1e;
    color: #ffffff;
    font-family: 'Fira Code', monospace;
  }

  .ide-main {
    display: flex;
    flex: 1;
    overflow: hidden;
  }

  .project-tree {
    background-color: #252526;
    overflow-y: auto;
    border-right: 1px solid #333333;
    resize: horizontal;
  }

  .project-tree-resizer {
    width: 5px;
    background-color: #333333;
    cursor: ew-resize;
  }

  .code-area {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
  }

  .tabs {
    display: flex;
    background-color: #2d2d2d;
    border-bottom: 1px solid #333333;
    overflow-x: auto;
  }

  .tab {
    padding: 8px 16px;
    background-color: #2d2d2d;
    border: none;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s;
    white-space: nowrap;
  }

  .tab:hover {
    background-color: #3c3c3c;
  }

  .tab.active {
    background-color: #1e1e1e;
    border-bottom: 2px solid #007acc;
  }

  .editor {
    flex: 1;
    overflow: hidden;
  }

  .editor.full-height {
    height: calc(100vh - 80px);
  }

  .terminal-resizer {
    height: 5px;
    background-color: #333333;
    cursor: ns-resize;
  }

  .terminal {
    background-color: #1e1e1e;
    border-top: 1px solid #333333;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    .ide-main {
      flex-direction: column;
    }

    .code-area {
      height: calc(100vh - 40px);
    }

    .tabs {
      flex-wrap: wrap;
    }

    .tab {
      flex-grow: 1;
      text-align: center;
    }
  }
</style>
