<script>
  import { onMount } from 'svelte';

  let currentTime = new Date().toLocaleTimeString();

  onMount(() => {
    const interval = setInterval(() => {
      currentTime = new Date().toLocaleTimeString();
    }, 1000);

    return () => clearInterval(interval);
  });
</script>

<div class="fixed bottom-4 right-4 text-white bg-gray-800 p-2 rounded">
  {currentTime}
</div>
