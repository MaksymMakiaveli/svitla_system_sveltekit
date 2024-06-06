<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		src: string;
		alt?: string;
	}

	export let src: string;
	export let alt: string = '';
</script>

<div {...$$restProps}>
	<img {src} {alt} class="w-full h-full object-cover" />
</div>
