<script lang="ts">
	import { cn } from '$lib/shared/utils/class-name';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface $$Props extends HTMLButtonAttributes {}
</script>

<button
	{...$$restProps}
	class={cn('border-2 border-black flex items-center justify-center px-4 py-3', $$props.class)}
>
	<slot />
</button>
