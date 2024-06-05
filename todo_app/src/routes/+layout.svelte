<script>
	import './styles.css';
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		animation: animateBackground 20s linear infinite;
		@keyframes animateBackground {
			0% {
				background: linear-gradient(120deg, #ff9a9e, #fad0c4);
			}
			50% {
				background: linear-gradient(120deg, #84fab0, #8fd3f4);
			}
			100% {
				background: linear-gradient(120deg, #ff9a9e, #fad0c4);
			}
		}
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;

		overflow: clip;
	}
</style>
