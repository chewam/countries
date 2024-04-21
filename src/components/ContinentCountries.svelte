<script lang="ts">
  import Countries, { type Country } from "../stores/countries"
  import Status, { type Status as StatusType } from "../stores/status"

  let status: StatusType
  export let continent: string
  let continentCountries: Country[]

  Status.subscribe((value) => {
    status = value
  })

  Countries.subscribe((countries) => {
    continentCountries = countries.filter(
      (country) => country.continent === continent
    )
  })
</script>

<table class="table mt-2">
  <tbody>
    {#each continentCountries as country, index}
      <tr>
        <th>{index + 1}</th>
        <td class={`${country.found ? "text-success" : "text-error"}`}
          >{status === "end" || country.found ? country.name : ""}</td
        >
      </tr>
    {/each}
  </tbody>
</table>
