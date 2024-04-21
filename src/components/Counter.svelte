<script lang="ts">
  import Countries, { type Country } from "../stores/countries"

  let foundCountries: Country[] = []

  Countries.subscribe((data) => {
    foundCountries = data.filter((country) => country.found)
  })
</script>

<div class="xbg-lime-50 stats">
  <div class="stat py-0">
    <div class="stat-title">Countries found</div>
    <div class="stat-value">{foundCountries.length}/{$Countries.length}</div>
    <progress
      class="w-26 progress mt-2"
      value={foundCountries.length}
      max={$Countries.length}
    ></progress>
  </div>
</div>
