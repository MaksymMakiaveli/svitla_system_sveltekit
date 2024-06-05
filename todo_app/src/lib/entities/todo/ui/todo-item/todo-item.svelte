<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAttributes<HTMLElement> {
		checked: boolean;
		text: string;
		id: string;
	}

	export let checked = false;
	export let text = '';
	export let id = '';
</script>

<div {...$$restProps} class="todo-item {$$props.class}" class:todo-item--done={checked}>
	<p class="todo-text">{text}</p>
	<label for={id} class="label">
		<span class="emoji">
			<span class="eyes"></span>
			<span class="eyes"></span>
			<span class="mouth"></span>
		</span>
	</label>
	<input type="checkbox" {id} bind:checked />
</div>

<style>
	.todo-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 12px;

		padding: 4px;

		border-bottom: 1px solid #ccc;

		transition: all 300ms ease-in-out;
	}

	.todo-item:last-child {
		border-bottom: none;
	}

	.todo-text {
		flex: 1;
	}

	.todo-item input {
		position: absolute;
		width: 1px;
		visibility: hidden;
		opacity: 0;
	}

	.label {
		--size: 28px;

		position: relative;

		width: var(--size);
		height: var(--size);

		border: 1px solid #b6b6b6;
		border-radius: 9999px;
		transition: all 300ms ease-in-out;
	}

	.emoji {
		position: relative;
		width: 100%;
		height: 100%;

		display: flex;
		/*flex-direction: column;*/
		align-items: center;
		justify-content: center;
	}

	.eyes {
		position: relative;
		width: 3px;
		height: 3px;
		top: -4px;

		border-radius: 50%;
		background-color: black;
	}

	.eyes:first-of-type {
		left: -2px;
	}

	.eyes:nth-child(2) {
		right: -2px;
	}

	.mouth {
		position: absolute;
		bottom: 5px;
		width: 12px;
		height: 4px;

		border-bottom: 1px solid black;
		border-radius: 0;

		transition: border 300ms ease-in-out;
	}

	.todo-item--done .mouth {
		border-radius: 0 0 12px 12px;
	}

	.todo-item--done {
		text-decoration: line-through;
	}

	.todo-item--done .label {
		background-color: #5cb85c;
	}

	.todo-item--done .todo-text {
		opacity: 0.6;
	}
</style>
