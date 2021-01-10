<div class="icon">
    <img class="icon__image" src="/images/ui/icon.png" alt="icon">
</div>

<style lang="scss">
    @import '../../sass/main';
    
    .icon {
        position: absolute;
        bottom: 0;
        left: 50%;
        display: flex;
        justify-content: center;
        width: 100px;
        height: 150px;
        margin: 0 auto;
        transform: translateX(-50%);
        overflow: hidden;

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