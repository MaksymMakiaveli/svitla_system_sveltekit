<script lang="ts">
	import { Container, TodoListHeader, TodoButton, TodoInput, TodoItem } from '$lib/entities/todo';
	import { browser } from '$app/environment';
	import { fly } from 'svelte/transition';
	import { v4 as uuidv4 } from 'uuid';
	import { onMount } from 'svelte';

	interface Todo {
		id: string;
		text: string;
		done: boolean;
	}

	const LOCAL_STORAGE_KEY = 'todos';

	let todos: Todo[] = [];
	let inputValue = '';
	let isLoaded = false;

	function addTodo() {
		if (!inputValue.trim().length) return;
		todos = todos.concat([
			{
				id: uuidv4(),
				text: inputValue,
				done: false
			}
		]);
		inputValue = '';
	}

	function removeTodo(todoId: string) {
		todos = todos.reduce((acc, todo) => {
			if (todo.id !== todoId) acc.push(todo);
			return acc;
		}, [] as Todo[]);
	}

	onMount(() => {
		if (browser) {
			todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
			isLoaded = true;
		}
	});

	$: {
		if (browser && isLoaded) {
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
		}
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Container class="todo-container">
		<TodoListHeader />
		<div class="wrapper">
			<div class="list-box">
				<ul>
					{#each todos as todo}
						<li class="item" in:fly={{ y: 200 }} out:fly={{ x: '-100%' }}>
							<TodoItem
								class="todo-list-item"
								text={todo.text}
								id={todo.id}
								bind:checked={todo.done}
							/>
							<button class="remove-todo-button" on:click={() => removeTodo(todo.id)}
								><span>X</span></button
							>
						</li>
					{/each}
				</ul>
			</div>
			<TodoInput
				class="input"
				bind:value={inputValue}
				on:keydown={(e) => e.key === 'Enter' && addTodo()}
			/>
		</div>
		<TodoButton
			type="submit"
			on:click={addTodo}
			disabled={!inputValue.trim().length}
			class="add-todo-button"
		/>
	</Container>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		flex: 1;
		height: 100%;

		overflow: clip;
	}

	:global(.todo-container) {
		display: flex;
		flex-direction: column;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		flex: 1;
		gap: 24px;
		padding: 12px 24px 44px 24px;

		overflow: clip;
	}

	.list-box {
		display: flex;
		flex-direction: column;

		flex: 1 0 1px;

		overflow: clip;
	}

	.wrapper ul {
		flex: 1;
		height: 100%;

		display: flex;
		flex-direction: column;
		gap: 6px;

		overflow-x: clip;
		overflow-y: auto;

		list-style: none;

		padding-right: 12px;
	}

	::-webkit-scrollbar {
		width: 3px;
	}

	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	::-webkit-scrollbar-thumb {
		background: #888;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}

	.item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		width: 100%;
	}

	:global(.todo-list-item) {
		flex: 1;
	}

	.remove-todo-button {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-basis: 24px;
		height: 24px;

		background: transparent;
		outline: none;
		color: #575757;
		border: 1px solid rgba(87, 87, 87, 0.75);
		border-radius: 50%;
		font-size: 12px;
		line-height: 14px;
	}

	:global(.add-todo-button) {
		position: absolute;
		bottom: 0;
		right: 50%;

		transform: translate(50%, 50%);
	}
</style>
