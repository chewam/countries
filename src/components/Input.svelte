<script lang="ts">
  import Timer from "./Timer.svelte"
  import Giveup from "./Giveup.svelte"
  import Countries from "../stores/countries"

  let countryName = ""

  function checkCountryName() {
    const country = $Countries.find(
      (country) => country.name.toUpperCase() === countryName.toUpperCase()
    )

    if (country && !country.found) {
      console.log("COUNTRY FOUND:", country)
      country.found = true
      Countries.set([...$Countries])
      countryName = ""
    }
  }
</script>

<div class="xbg-pink-50 mr-2 flex flex-1 items-center">
  <label class="form-control w-full">
    <input
      type="text"
      bind:value={countryName}
      on:input={() => checkCountryName()}
      placeholder="Type a country name here..."
      class="input input-bordered mb-2 mt-1 w-full"
    />
    <div class="label p-0">
      <Timer />
      <Giveup />
    </div>
  </label>
</div>
