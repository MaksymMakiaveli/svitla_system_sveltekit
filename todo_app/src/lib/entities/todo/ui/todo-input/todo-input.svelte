<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface $$Props extends HTMLInputAttributes {
		value: string;
	}

	export let value = '';
</script>

<input bind:value {...$$restProps} class="todo-input {$$props.class}" on:input on:keydown />

<style>
	.todo-input {
		width: 100%;
		padding: 12px;

		font-size: 16px;
		font-weight: 500;
		color: #000;
		background-color: #fff;
		border: 1px solid #ccc;
		border-radius: 4px;
		outline: none;
	}

	.todo-input:focus {
		border: 1px solid #5cb85c;
	}

	.todo-input::placeholder {
		color: #ccc;
	}
</style>
