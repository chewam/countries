<script lang="ts">
	import Input from './Input.svelte';
	import Counter from './Counter.svelte';
	import WorldMap from './WorldMap.svelte';
	import Progress from './Progress.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="container mx-auto">
	<div class="flex">
		<Input />
		<Counter />
	</div>
	<WorldMap />
	<Progress />
</section>
