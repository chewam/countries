<script lang="ts">
	import Countries from './countries';

	let countryName = '';
	let input: HTMLInputElement;

	function checkCountryName(countryName: string) {
		const country = $Countries.find(
			(country) => country.name.toUpperCase() === countryName.toUpperCase()
		);

		if (country) {
			country.found = true;
			console.log('Country Found:', country);
			Countries.set([...$Countries]);
			input.value = '';
		}
	}
</script>

<div class="mr-2 flex flex-1 items-center">
	<label class="form-control w-full">
		<input
			type="text"
			bind:this={input}
			placeholder="Type country name here..."
			bind:value={countryName}
			class="input input-bordered w-full"
			on:input={() => checkCountryName(countryName)}
		/>
	</label>
</div>
