<script lang="ts">
  import Status from "../stores/status"
</script>

<button on:click={() => Status.set("end")} class="btn btn-error btn-sm">
  Give up!
</button>
