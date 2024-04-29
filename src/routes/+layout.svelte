<script>
  // import Header from './Header.svelte';
  import "../app.css"
</script>

<div class="app">
  <main>
    <slot />
  </main>

  <footer class="container mx-auto my-2 text-sm flex justify-between">
    <div>Chewam © 2024</div>
    <div>Version <a href="#" target="_blank">x.x.x</a></div>
	</footer>
</div>

