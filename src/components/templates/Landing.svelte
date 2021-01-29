<script>
    import Expressions from "../organisms/Expressions.svelte";
    import Profile from "../molecules/Profile.svelte";
    import Socials from "../organisms/Socials.svelte";

</script>

<section class="landing">
    <article class="landing__page main-content">
        <Expressions />
        <div class="main-content__wrapper">
            <Profile />
            <Socials />
            <div></div>
        </div>
    </article>
</section>

<style lang="scss">
    @import '../../sass/main';

    .landing {
        scroll-snap-type: mandatory;

        &__page {
            position: relative;
            background: #0f0f0f;
            min-height: 100vh;
            color: white;
            scroll-snap-align: start end;

            &.main-content {
                display: grid;
                grid-template-rows: repeat(2, 1fr);
                background: #111111;

                .main-content__wrapper {
                    display: grid;
                    grid-template-rows: 0.5fr 1.5fr 0;
                    height: 100%;
                }

                @include desktop {
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: unset;
                }
            }

            &.pins {
                display: flex;
                flex-flow: column;
            }
        }
    }
</style>