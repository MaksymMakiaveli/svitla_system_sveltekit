<script>
	import './styles.css';
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';
	import { setLanguageContext } from '$lib/shared/context';

	setLanguageContext();
</script>

<div class="flex flex-col min-h-dvh bg-primary overflow-x-clip">
	<main>
		<slot />
	</main>
</div>
