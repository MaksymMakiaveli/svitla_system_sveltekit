<script lang="ts">
	import { getContext } from 'svelte';
	import { getLanguageContext, LANG, type Languages } from '$lib/shared/context';

	const language = getLanguageContext();

	const languagesList = Object.values(LANG);

	const changeLanguage = (lang: Languages) => {
		language.set(lang);
	};
</script>

<ul class="flex items-center gap-4">
	{#each languagesList as lang}
		<li>
			<button
				data-active={$language === lang}
				on:click={() => changeLanguage(lang)}
				class="uppercase data-[active=true]:font-bold"
			>
				{lang}
			</button>
		</li>
	{/each}
</ul>
