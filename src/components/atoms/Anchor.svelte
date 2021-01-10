<script>
    import { createEventDispatcher } from 'svelte';
    import {link} from 'svelte-spa-router'
    import active from 'svelte-spa-router/active'

    const emit = createEventDispatcher()

    export let route = null
    export let silent = false
    export let fill = false
    export let external = false
    export let clickHandler = () => {}
</script>

{#if route !== null}
    <a class="anchor link {silent ? 'silent' : ''} {fill ? 'fill' : ''}" href={route} use:link use:active on:click={clickHandler()}><slot /></a>
{:else if external}
    <a class="anchor link {silent ? 'silent' : ''} {fill ? 'fill' : ''}" href={external} on:click={clickHandler()} target="_new"><slot /></a>
{:else}
    <div class="anchor empty"><slot /></div>
{/if}

<style type="text/scss">
    @import '../../sass/main';

    .anchor {
        &.silent {
            background: unset;
            color: unset;

            &:hover {
                background: unset;
                color: unset;
            }
        }

        &.fill {
            display: block;
            width: inherit;
            height: inherit;
        }
    }
</style>