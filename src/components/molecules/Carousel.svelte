<script>
    import Anchor from "../atoms/Anchor.svelte";

    export let metadata = []
    export let index = -1
    export let autoplay = true

    let autoplayHandler = null
    let userPlaying = false

    $: currentMetadata = index != -1 ? metadata[index] : null

    const handleUserplay = () => userPlaying = false

    const handleImageChange = i => {
        index = i
        userPlaying = true

        // if the user is running through the images, wait unti they are inactive to go again
        clearTimeout(handleUserplay)
        setTimeout(handleUserplay, 10000)
    }

    const handleAutoplay = () => {
        if (userPlaying) return
        if (index != -1) {
            index++
            if (index > metadata.length -1) index = 0
            else if (index < 0) index = metadata.length - 1
        }
    }

    $: {
        // set data when ready
        if (index == -1 && metadata.length > 0) index = 0
        // handle autoplay changes
        if (autoplay && autoplayHandler == null) autoplayHandler = setInterval(handleAutoplay, 6000)
        else if(!autoplay) {
            clearInterval(handleAutoplay)
            autoplayHandler = null
        }
    }
</script>

<section class="carousel">
    {#if metadata.length > 0}
        <!-- Images -->
        {#each metadata as {src}, i}
            <div class="carousel__image {i === index ? 'current' : ''}" style="background-image:url({src})"></div>
        {/each}
        <div class="carousel__overlay" >
            <div class="grayable"></div>
            <div class="clickthrough">
                <Anchor route={currentMetadata.route || null} external={currentMetadata.external || null} fill={true} />
            </div>
            <div class="content">
                <div class="metadata">
                    <div class="content">
                        <div class="content__heading">
                            {@html currentMetadata.heading}
                        </div>
                        <div class="content__description">
                            {@html currentMetadata.description}
                        </div>
                    </div>
                </div>
                <div class="controls">
                    {#each metadata as dot, i}
                        <div
                            class="control {i === index ? 'control--current' : ''}"
                            on:click={() => handleImageChange(i)}
                        ></div>
                    {/each}
                </div>
            </div>
        </div>
    {/if}
</section>

<style lang="scss">
    @import '../../sass/main';

    .carousel {
        position: relative;
        display: flex;
        flex-flow: column;
        align-items: center;
        background: black;
        min-height: 100%;

        &__image {
            flex: 1;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-position: right center;
            background-size: auto 100%;
            opacity: 0;
            transition: opacity ease 0.25s;

            &.current {
                opacity: 1;
            }
        }

        &__overlay {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;

            .grayable {
                position: absolute;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.6);
                mix-blend-mode: multiply;
            }

            .clickthrough {
                position: absolute;
                width: 100%;
                height: 100%;
            }

            .content {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                justify-content: center;
                height: 100%;
                pointer-events: none;

                .metadata {
                    position: relative;
                    top: 80px;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    padding: 15px 35px;
                    box-sizing: border-box;

                    .content {
                        padding: 10px 35px;
                        color: white;
                        font-size: 0.8em;

                        @include tablet {
                            font-size: 1.0em;
                        }

                        @include desktop {
                            padding: 10px 50px;
                        }

                        @include large {
                            font-size: 1.2em;
                        }

                        &__heading {
                            align-self: flex-end;
                            font-size: 1.3em;
                            font-weight: 500;
                            word-break: break-all;
                            color: mix($accentColour, white, 55);
                            @extend %headerFont;
                        }
                    }
                }

                .controls {
                    position: absolute;
                    top: 40px;
                    left: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    pointer-events: all;
                    transform: translateX(-50%);

                    .control {
                        background: rgba(128, 128, 128, 0.65);
                        width: 8px;
                        height: 8px;
                        margin: 2px;
                        border-radius: 50%;
                        transition: ease all 0.25s;
                        cursor: pointer;
                        pointer-events: all;

                        &--current {
                            background: white;
                            transform: scale(1.1);
                        }
                    }
                }
            }
        }
    }
</style>