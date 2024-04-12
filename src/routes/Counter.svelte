<script lang="ts">
	import Countries, { type Country } from './countries';

	let foundCountries: Country[] = [];

	Countries.subscribe((data) => {
		foundCountries = data.filter((country) => country.found);
	});
</script>

<div class="stats">
	<div class="stat">
		<div class="stat-title">Countries found</div>
		<div class="stat-value">{foundCountries.length}/{$Countries.length}</div>
		<progress class="w-26 progress mt-2" value={foundCountries.length} max={$Countries.length}
		></progress>
	</div>
</div>
