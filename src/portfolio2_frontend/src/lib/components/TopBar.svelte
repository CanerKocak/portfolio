<script>
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  let showCVOverlay = false;
  let showInfoAIOverlay = false;

  function toggleCV() {
    showCVOverlay = !showCVOverlay;
    showInfoAIOverlay = false;
  }

  function toggleInfoAI() {
    showInfoAIOverlay = !showInfoAIOverlay;
    showCVOverlay = false;
  }

  function closeOverlay() {
    showCVOverlay = false;
    showInfoAIOverlay = false;
  }
</script>

<div class="relative">
  <div class="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-1 flex justify-between items-center w-full shadow-md">
    <div class="flex items-center space-x-4">
      <span class="ml-2.5 font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">CK</span>
      
      <button 
        class="px-3 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors duration-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
        on:click={toggleCV}
      >
        CV
      </button>
    </div>
  </div>

  {#if showCVOverlay}
    <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
         transition:fade="{{ duration: 200 }}"
         on:click|self={closeOverlay}>
      <div class="bg-white text-black p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto"
           transition:fly="{{ y: -50, duration: 300, easing: cubicOut }}">
        <h2 class="text-3xl font-bold mb-4 text-gray-800">CV</h2>
        <p class="text-gray-600">This is where your CV content would go.</p>
        <button class="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                on:click={closeOverlay}>Close</button>
      </div>
    </div>
  {/if}

  {#if showInfoAIOverlay}
    <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
         transition:fade="{{ duration: 200 }}"
         on:click|self={closeOverlay}>
      <div class="bg-white text-black p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto"
           transition:fly="{{ y: -50, duration: 300, easing: cubicOut }}">
        <h2 class="text-3xl font-bold mb-4 text-gray-800">INFO AI</h2>
        <p class="text-gray-600">This is where your INFO AI content would go.</p>
        <button class="mt-6 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                on:click={closeOverlay}>Close</button>
      </div>
    </div>
  {/if}
</div>
