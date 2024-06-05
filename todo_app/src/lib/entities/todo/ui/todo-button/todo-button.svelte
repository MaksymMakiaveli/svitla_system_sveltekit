<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface $$Props extends HTMLButtonAttributes {}
</script>

<button {...$$restProps} class="btn {$$props.class}" on:click on:keydown on:keyup> Add</button>

<style>
	.btn {
		display: flex;
		justify-content: center;
		align-items: center;

		width: clamp(110px, 32vw, 320px);
		height: 40px;

		padding: 8px 16px;

		font-size: 16px;
		font-weight: 500;
		background-color: #5cb85c;
		color: #fff;
		border-radius: 40px;
		outline: none;
		border: none;

		transition: background-color 300ms ease-in-out;

		cursor: pointer;
	}

	.btn:hover {
		background-color: #4ca64c;
	}

	.btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
