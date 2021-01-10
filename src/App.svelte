<script>
	import Router from 'svelte-spa-router'
	import routes from './routes'
	import Footer from './components/atoms/Footer.svelte'
	import Snackbar from './components/atoms/Snackbar.svelte'
	import Icon from './components/atoms/Icon.svelte';

	let snackbarReadable = 'Hello'
</script>

<main>
	<div class="content">
		<div class="wrapper">
			<Router {routes} />
		</div>
	</div>
	<Icon />
	<Footer />

	<Snackbar readable={snackbarReadable} />
</main>

<style lang="scss">
	@import 'sass/main';

	main {
		.content {
			display: flex;
			flex-flow: column;
			min-height: 100vh;

			.wrapper {
				flex: 1;
			}
		}

	}

	:global(::-webkit-scrollbar) {
		display: none;
	}
</style>