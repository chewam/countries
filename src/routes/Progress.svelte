<script lang="ts">
	import { writable } from 'svelte/store';
	import Countries, { type Country } from './countries';
	import ContinentCountries from './ContinentCountries.svelte';

	interface Continent {
		name: string;
		progess?: number;
		totalCountries?: number;
		countriesFound?: Country[];
	}

	const continents: Continent[] = [
		{ name: 'North America' },
		{ name: 'South America' },
		{ name: 'Europe' },
		{ name: 'Africa' },
		{ name: 'Asia' },
		{ name: 'Oceania' },
	];

	const Continents = writable(continents);

	$Continents.forEach((continent) => {
		continent.totalCountries = $Countries.filter(
			(country) => country.continent === continent.name
		).length;
	});

	Countries.subscribe((countries) => {
		$Continents.forEach((continent) => {
			continent.countriesFound = countries.filter(
				(country) => country.found && country.continent === continent.name
			);
			if (continent.totalCountries) {
				continent.progess = Math.round(
					(continent.countriesFound.length * 100) / continent.totalCountries
				);
			}
		});
		Continents.set([...$Continents]);
	});
</script>

<div class="mt-10 flex divide-x divide-gray-700">
	{#each $Continents as continent}
		<div class="flex flex-1 flex-col items-center px-2">
			<div>{continent.name}</div>
			<div
				class="radial-progress mt-1"
				style={`--value:${continent.progess}; --thickness: 2px; --size:4rem`}
				role="progressbar"
			>
				{continent.progess}%
			</div>
			<ContinentCountries bind:continent={continent.name}/>
		</div>
	{/each}
</div>
