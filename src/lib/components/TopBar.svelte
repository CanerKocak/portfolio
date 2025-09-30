<script>
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  let showShortcuts = false;

  function toggleShortcuts() {
    showShortcuts = !showShortcuts;
  }

  function closeOverlay() {
    showShortcuts = false;
  }
</script>

<div class="relative">
  <div class="topbar">
    <div class="topbar-left">
      <span class="brand-logo">Caner Kocak</span>
      <span class="brand-subtitle">Full-stack Developer</span>
    </div>
    <div class="topbar-right">
      <button
        class="icon-button"
        on:click={toggleShortcuts}
        title="Keyboard shortcuts"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
          <line x1="6" y1="8" x2="6.01" y2="8"></line>
          <line x1="10" y1="8" x2="10.01" y2="8"></line>
          <line x1="14" y1="8" x2="14.01" y2="8"></line>
          <line x1="18" y1="8" x2="18.01" y2="8"></line>
          <line x1="8" y1="12" x2="8.01" y2="12"></line>
          <line x1="12" y1="12" x2="12.01" y2="12"></line>
          <line x1="16" y1="12" x2="16.01" y2="12"></line>
          <line x1="7" y1="16" x2="17" y2="16"></line>
        </svg>
      </button>
      <a
        href="https://github.com/CanerKocak"
        target="_blank"
        rel="noopener noreferrer"
        class="icon-button"
        title="GitHub Profile"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>
    </div>
  </div>

  {#if showShortcuts}
    <div class="overlay"
         transition:fade="{{ duration: 200 }}"
         on:click|self={closeOverlay}>
      <div class="modal"
           transition:fly="{{ y: -50, duration: 300, easing: cubicOut }}">
        <h2 class="modal-title">⌨️ Keyboard Shortcuts</h2>
        <div class="shortcuts-list">
          <div class="shortcut">
            <span class="key">Ctrl + `</span>
            <span class="description">Toggle Terminal</span>
          </div>
          <div class="shortcut">
            <span class="key">Click & Drag</span>
            <span class="description">Resize Panels</span>
          </div>
          <div class="shortcut">
            <span class="key">Tab Files</span>
            <span class="description">Switch Between Sections</span>
          </div>
        </div>
        <button class="close-button" on:click={closeOverlay}>Got it!</button>
      </div>
    </div>
  {/if}
</div>

<style>
  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    background: linear-gradient(135deg, #1e1e1e 0%, #252526 100%);
    border-bottom: 1px solid #007acc;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  .topbar-left {
    display: flex;
    align-items: baseline;
    gap: 12px;
  }

  .brand-logo {
    font-size: 16px;
    font-weight: 600;
    background: linear-gradient(135deg, #007acc, #0098ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .brand-subtitle {
    font-size: 12px;
    color: #888888;
  }

  .topbar-right {
    display: flex;
    gap: 8px;
  }

  .icon-button {
    padding: 6px;
    color: #cccccc;
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-button:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
  }

  .overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal {
    background: linear-gradient(135deg, #1e1e1e 0%, #252526 100%);
    padding: 32px;
    border-radius: 12px;
    max-width: 500px;
    width: 90%;
    border: 1px solid #007acc;
    box-shadow: 0 20px 60px rgba(0, 122, 204, 0.3);
  }

  .modal-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 24px;
    color: #ffffff;
  }

  .shortcuts-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
  }

  .shortcut {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
    border-left: 3px solid #007acc;
  }

  .key {
    font-family: 'Fira Code', monospace;
    font-weight: 600;
    color: #007acc;
    padding: 4px 12px;
    background-color: rgba(0, 122, 204, 0.1);
    border-radius: 4px;
    font-size: 13px;
  }

  .description {
    color: #cccccc;
    font-size: 14px;
  }

  .close-button {
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, #007acc, #0098ff);
    color: #ffffff;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .close-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 122, 204, 0.4);
  }
</style>
