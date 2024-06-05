<div {...$$restProps} class="container {$$props.class}">
	<slot />
</div>

<style>
	.container {
		position: relative;

		width: clamp(320px, 83.3vw, 600px);
		height: clamp(400px, 66vh, 700px);

		background: #e3e1e1;
		box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
		border-radius: 14px;

		transition:
			width 100ms linear,
			height 100ms linear;
	}
</style>
