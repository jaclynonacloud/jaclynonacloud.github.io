<script>
    import Carousel from "../molecules/Carousel.svelte";

    let expressions = []
    let clickthrough = null

    fetch('/data/expressions.json')
        .then(blob => blob.json())
        .then(data => {
            expressions = data
            updateExpression()
        })

    const updateExpression = () => {
        clickthrough = expressions[0].external
    }
</script>

<section class="expressions">
    <Carousel
        metadata={expressions}
        route={clickthrough}
    />
</section>

<style lang="scss">
    @import '../../sass/main';

    @keyframes mobile {
        0% { clip-path: polygon(100% 53%, 93% 70%, 68% 69%, 54% 86%, 39% 83%, 36% 96%, 9% 90%, 0% 96%, 0 0, 100% 0); }
        50% { clip-path: polygon(100% 59%, 86% 64%, 74% 76%, 54% 81%, 44% 87%, 26% 88%, 10% 97%, 0% 96%, 0 0, 100% 0); }
        100% { clip-path: polygon(100% 53%, 93% 70%, 68% 69%, 54% 86%, 39% 83%, 36% 96%, 9% 90%, 0% 96%, 0 0, 100% 0); }
    }
    @keyframes desktop {
        0% { clip-path: polygon(93% 0, 95% 27%, 93% 39%, 98% 50%, 93% 56%, 99% 64%, 97% 82%, 100% 100%, 0 100%, 0 0); }
        50% { clip-path: polygon(97% 0, 99% 23%, 99% 37%, 94% 46%, 100% 56%, 94% 66%, 98% 74%, 100% 100%, 0 100%, 0 0); }
        100% { clip-path: polygon(93% 0, 95% 27%, 93% 39%, 98% 50%, 93% 56%, 99% 64%, 97% 82%, 100% 100%, 0 100%, 0 0); }
    }

    .expressions {
        position: relative;
        background: #202020;

        clip-path: polygon(100% 53%, 93% 70%, 68% 69%, 54% 86%, 39% 83%, 36% 96%, 9% 90%, 0% 96%, 0 0, 100% 0);
        animation: mobile infinite 2s;

        transition: ease all 0.25s;

        @include desktop {
            clip-path: polygon(0 0, calc(100% - 35px) 0%, 100% 100%, 0% 100%);
            animation-name: desktop;
        }
    }
</style>