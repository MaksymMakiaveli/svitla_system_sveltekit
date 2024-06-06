<script>
	import MainImage from '$lib/images/1.png';
	import FirstImage from '$lib/images/2.png';
	import SecondImage from '$lib/images/3.png';
	import { Button, SideText } from '$lib/shared/ui';
	import { LanguageSwitcher, ImageBox } from '$lib/widgets';
	import { page } from '$app/stores';
	import { getLanguageContext } from '$lib/shared/context';

	const language = getLanguageContext();
</script>

<svelte:head>
	<title>{$page.data.translations[$language].page_title} 2020</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="relative flex flex-col lg:flex-row h-dvh bg-primary">
	<div class="relative justify-end md:basis-3/5 w-full min-h-dvh">
		<div
			class="absolute z-1 top-0 left-0 w-full h-full before:absolute before:inset-0 before:h-full before:bg-black/20"
		>
			<img src={MainImage} alt="main" class="w-full h-dvh md:h-full object-cover" />
		</div>
		<SideText
			textTop={$page.data.translations[$language].next}
			textBottom={$page.data.translations[$language].previous}
			position="custom"
			color="white"
			class="top-1/4 right-4"
		/>

		<p class="absolute top-1/4 left-14 z-[2] text-base font-bodoni text-white/70">
			{@html $page.data.translations[$language].page_subtitle}
		</p>
		<h2
			class="absolute bottom-1/4 left-14 z-[2] flex flex-col text-6xl md:text-8xl font-bodoni font-normal text-white"
		>
			<span class="">{$page.data.translations[$language].page_title}</span>
			<span class="">2020</span>
		</h2>
	</div>
	<div class="relative flex flex-col justify-between min-h-dvh grow items-end py-6 px-4">
		<LanguageSwitcher />

		<SideText
			textTop="Ref. 6687/787"
			textBottom={$page.data.translations[$language].white_dress}
			position="right"
		/>

		<ImageBox
			src={FirstImage}
			alt="first"
			class="w-[310px] h-[300px] lg:w-[160px] 2xl:w-[300px] lg:h-[450px] absolute bottom-20 left-8 lg:bottom-4 lg:left-4"
		/>
		<ImageBox
			src={SecondImage}
			alt="first"
			class="w-[240]  2xl:w-[300px] h-[340px] lg:h-[400px] absolute max-lg:right-14 max-lg:top-14 lg:bottom-[475px] lg:left-[160px]"
		/>

		<div class="flex w-full items-end justify-end gap-4">
			<Button class="w-full lg:w-56 h-12">{$page.data.translations[$language].shop_now}</Button>
		</div>
	</div>
</section>

<style>
</style>
