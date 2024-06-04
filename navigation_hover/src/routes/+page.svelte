<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { browser } from '$app/environment';

	const sections = ['Animation', 'Branding', 'Illustration'];
	const linkWidth = 130;
	const linkGap = 20;

	let activeSection = 'Branding';
	let activeIndex = sections.indexOf(activeSection);
	$: translateX = linkWidth * activeIndex + linkGap * activeIndex + (linkWidth / 3 - linkGap / 2);

	let x = 0;
	let y = 0;

	let visible = false;

	onMount(() => {
		requestAnimationFrame(() => {
			visible = true;
		});
	});

	const setActiveSection = (section: string, index: number) => {
		activeSection = section;
		activeIndex = index;
	};

	const onMouseMove = (e: MouseEvent) => {
		x = e.clientX;
		y = e.clientY;
	};

	onMount(() => {
		if (browser) {
			window.addEventListener('mousemove', onMouseMove);
		}

		return () => {
			if (browser) {
				window.removeEventListener('mousemove', onMouseMove);
			}
		};
	});
</script>

<div class="flex items-center justify-center h-full text-white relative">
	<div class="text-center relative">
		<div class="link-list flex items-center relative" style="gap: {linkGap}px;">
			{#each sections as section, index}
				{#if visible}
					<a
						href="##"
						in:fade={{ duration: 1000 }}
						data-actve={section === activeSection}
						class="link-item link-item-{index +
							1} cursor-none relative font-medium text-gray-600 hover:text-white transition-colors duration-300 text-3xl data-[active='true']:text-white"
						on:click={() => setActiveSection(section, index)}
						style="width: {linkWidth}px; --num: {index + 1};"
					>
						{section}
					</a>
				{/if}
			{/each}

			<div
				class="cursor fixed transition transform duration-300 ease-in-out size-3.5 rounded-full bg-white mix-blend-difference"
				style="top: {y}px;left: {x}px;"
			></div>
		</div>
		{#if visible}
			<div
				in:fade={{ duration: 1000 }}
				class="underline absolute -bottom-3 left-0 transition transform duration-300 ease-in-out h-1 rounded-full bg-white"
				style="width: {linkWidth / 2}px;transform: translateX({translateX}px)"
			></div>
		{/if}
	</div>
</div>

<style>
	.link-item {
		/*opacity: 0;*/
		/*animation: mount 0.5s ease-in-out forwards calc(var(--num) * 200ms);*/
	}

	.underline {
		/*opacity: 0;*/
		/*animation: visible 0.5s ease-in-out forwards;*/
		/*animation-delay: 1000ms;*/
	}

	.link-item[data-actve='true'] {
		@apply text-white;
	}

	@media screen and (hover: none) {
		.cursor {
			display: none;
		}
	}

	@keyframes visible {
		to {
			opacity: 1;
		}
	}

	@keyframes mount {
		from {
			transform: translateX(-100%);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
