<script lang="ts">
  import Input from "../components/Input.svelte"
  import Counter from "../components/Counter.svelte"
  import WorldMap from "../components/WorldMap.svelte"
  import Progress from "../components/Progress.svelte"
</script>

<svelte:head>
  <title>Countries of the World</title>
  <meta
    name="description"
    content="A game to guess all the countries of the world."
  />
</svelte:head>

<section class="container mx-auto">
  <div class="mt-10 flex">
    <Input />
    <Counter />
  </div>
  <WorldMap />
  <Progress />
</section>
