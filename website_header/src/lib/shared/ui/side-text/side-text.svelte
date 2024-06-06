<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/shared/utils/class-name';

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		textTop: string;
		textBottom: string;
		position?: 'left' | 'right' | 'top' | 'bottom' | 'custom';
		separatorSize?: 'sm' | 'md' | 'lg';
		color?: 'black' | 'white';
	}

	export let textTop: string;
	export let textBottom: string;
	export let position: 'left' | 'right' | 'top' | 'bottom' | 'custom' = 'right';
	export let separatorSize: 'sm' | 'md' | 'lg' = 'lg';
	export let color: 'black' | 'white' = 'black';
</script>

<div
	{...$$restProps}
	class={cn(
		'absolute z-[1] inline-flex h-fit w-fit justify-center gap-3 text-sm text-black/60 origin-center transform',
		{
			'w-full': position === 'bottom' || position === 'top',
			'top-3/4': position === 'left' || position === 'right',
			'left-5 -rotate-90 origin-left': position === 'left',
			'right-5  rotate-90 origin-right': position === 'right',
			'top-0': position === 'top',
			'bottom-0 rotate-180': position === 'bottom',
			'': position === 'custom',
			'text-white/60': color === 'white'
		},
		$$props.class
	)}
>
	<div class="relative flex items-center gap-6 transform">
		<span>{textTop}</span>
		<span
			class={cn('inline-block w-24 h-px bg-black/60', {
				'w-6': separatorSize === 'sm',
				'w-12': separatorSize === 'md',
				'w-24': separatorSize === 'lg',
				'bg-white/60': color === 'white'
			})}
		/>
		<span>{textBottom}</span>
	</div>
</div>
