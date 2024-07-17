<script>
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  let showCVOverlay = false;
  let showInfoAIOverlay = false;

  function toggleCV() {
    showCVOverlay = !showCVOverlay;
    showInfoAIOverlay = false;
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
      
    </div>
    <div class="flex items-center">
      <a 
        href="https://github.com/CanerKocak/portfolio" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="mr-2.5 text-white hover:text-gray-300 transition-colors duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>
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
</div>
