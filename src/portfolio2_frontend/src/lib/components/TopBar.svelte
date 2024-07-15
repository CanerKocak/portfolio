<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function openCV() {
    dispatch('openCV');
  }

  function openInfoAI() {
    dispatch('openInfoAI');
  }
</script>

<div class="bg-gray-800 text-white p-2 flex justify-between items-center">
  <div class="flex items-center">
    <button 
      class="mr-4 hover:text-gray-300 transition-colors duration-200"
      on:click={openCV}
    >
      CV
    </button>
    <button 
      class="hover:text-gray-300 transition-colors duration-200"
      on:click={openInfoAI}
    >
      INFO AI
    </button>
  </div>
</div>
