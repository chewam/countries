<script lang="ts">
  import Countries, { type Country } from "./countries";

  export let continent: string;
  let continentCountries: Country[];

  Countries.subscribe((countries) => {
    continentCountries = countries.filter((country) => country.continent === continent)
  })
</script>


<table class="table">
  <tbody>
    {#each continentCountries as country, index}  
      <tr>
        <th>{index + 1}</th>
        <td>{country.found ? country.name : ''}</td>
      </tr>
    {/each}
  </tbody>
</table>
