<script lang="ts">
	import { getCurrentDateInfo } from '$lib/shared/utils/date';

	let dateInfo = getCurrentDateInfo();
</script>

<header class="todo-list-header">
	<h4>
		{dateInfo.month}
	</h4>
	<p>
		{dateInfo.day}, {dateInfo.month}
		{dateInfo.dayNumber}
	</p>
</header>

<style>
	.todo-list-header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		gap: 12px;
		padding-block: 24px;

		border-bottom: 3px solid #cccccc;
	}

	.todo-list-header h4 {
		font-size: 32px;
		font-weight: 700;
	}

	.todo-list-header p {
		font-size: 16px;
		font-weight: 600;

		color: #267e9a;
	}
</style>
