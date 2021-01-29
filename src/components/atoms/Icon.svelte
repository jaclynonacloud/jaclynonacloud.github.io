<div class="icon">
    <img class="icon__image" src="/images/ui/icon.png" alt="icon">
</div>

<style lang="scss">
    @import '../../sass/main';
    
    .icon {
        position: absolute;
        bottom: 0;
        right: 65px;
        display: flex;
        justify-content: center;
        width: 100px;
        height: 150px;
        margin: 0 auto;
        overflow: hidden;
        z-index: 0;
        pointer-events: none;
        user-select: none;

        @include desktop {
            left: 50%;
            right: unset;
            transform: translateX(-50%);
        }

        &__image {
            position: relative;
            bottom: 35px;
            width: auto;
            height: 150px;
            object-position: center bottom;
            transform: translateY(80px);
            z-index: -1;
        }
    }
</style>