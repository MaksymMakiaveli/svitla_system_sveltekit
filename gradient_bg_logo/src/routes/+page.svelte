<script lang="ts">
	import BingLogo from '$lib/images/bing-logo.svg';

	let card: HTMLDivElement;

	function handleMouseMove(event: MouseEvent) {
		requestAnimationFrame(() => {
			const cardRect = card.getBoundingClientRect();
			const cardX = cardRect.left + cardRect.width / 2;
			const cardY = cardRect.top + cardRect.height / 2;
			const angleX = (event.clientY - cardY) / 10;
			const angleY = (event.clientX - cardX) / -10;

			card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
			card.style.boxShadow = `${angleY * 2}px ${angleX * 2}px 30px rgba(0, 0, 0, 0.3)`;
		});
	}

	function handleMouseLeave() {
		card.style.transform = `rotateX(0deg) rotateY(0deg)`;
		card.style.boxShadow = `0 10px 20px rgba(0, 0, 0, 0.1)`;
	}
</script>

<svelte:head>
	<title>Gradient BG Logo</title>
	<meta name="description" content="Gradient BG Logo" />
</svelte:head>

<section class="container">
	<div
		role="banner"
		class="badge"
		bind:this={card}
		on:mousemove={handleMouseMove}
		on:mouseleave={handleMouseLeave}
	>
		<div class="badge-layer">
			<img src={BingLogo} alt="Bing" class="logo" />
			<span>Bing</span>
		</div>
	</div>
</section>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		height: 100%;

		perspective: 1500px;
	}

	.badge {
		--size: clamp(280px, 58vw, 420px);
		position: relative;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		width: var(--size);
		height: var(--size);

		padding: 12px;

		background-color: #fff;
		border-radius: 30%;
		box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
		transition:
			transform 0.1s ease-out,
			box-shadow 0.1s ease-out;
		transform-style: preserve-3d;
	}

	.badge-layer {
		position: absolute;

		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		gap: 24px;

		transform: translateZ(20px);
		background: rgba(255, 255, 255, 0.9);
		border-radius: 30%;
		transition: opacity 0.2s ease-out;
	}

	.logo {
		width: 32%;
		height: 46%;

		object-fit: contain;
	}

	.badge span {
		font-size: 32px;
		line-height: 26px;
		font-weight: 300;
	}
</style>
