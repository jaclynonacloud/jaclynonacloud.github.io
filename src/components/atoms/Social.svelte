<script>
    import { createEventDispatcher } from "svelte";

    export let src = ''
    export let href = ''
    export let readable = ''
    export let action = null

    const emit = createEventDispatcher()

    const handleAction = () => {
        if (action == null) return
        emit('action', action)
    }
</script>

{#if action != null}
    <div class="social" data-readable={readable} on:click={handleAction}>
        <img class="social__image" {src} alt={readable} />
    </div>
{:else}
    <a {href} class="social" data-readable={readable} target='_new'>
        <img class="social__image" {src} alt={readable} />
    </a>
{/if}


<style lang="scss">
    @import '../../sass/main';

    @keyframes pulse {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(1.5);
            opacity: 0;
        }
    }

    .social {
        justify-self: center;
        align-self: center;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        background: $accentColour;
        width: 50px;
        height: 50px;
        margin-bottom: 25px;
        border-radius: 50%;
        cursor: pointer;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 50px;
            height: 50px;
            background: $accentColour;
            transform: scale(1);
            opacity: 1;
            border-radius: 50%;
            mix-blend-mode: lighten;
            transition: ease all 0.6s;
        }

        &::after {
            content: attr(data-readable);
            position: absolute;
            top: 100%;
            padding-top: 5px;
            width: max-content;
            color: $accentColour;
            font-size: 1.2em;
        }

        &:hover {
            &::before {
                animation: pulse infinite 0.5s;
            }
        }

        @include tablet {
            &::after {
                content: '';
            }
        }

        
        &__image {
            max-width: 32px;
            max-height: 32px;
            object-fit: scale-down;
        }

        @include desktop {
            &:hover {
                &::after {
                    content: attr(data-readable);
                    position: absolute;
                }
            }
        }

        @include large {
            width: 96px;
            height: 96px;

            &__image {
                max-width: 64px;
                max-height: 64px;
            }

            &::before {
                width: 96px;
                height: 96px;
            }
        }
    }
</style>