<div class="profile">
    <div class="heading">Jaclyn Staples</div>
    <div class="occ">Software Developer</div>
    <div class="small">& Game Dev Hobbyist</div>
</div>


<style lang="scss">
    @import '../../sass/main';

    .profile {
        align-self: flex-end;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 4px;
        padding: 5px 15px;
        margin: 15px;
        color: white;
        text-align: center;
        box-sizing: border-box;
        transition: ease all 0.25s;

        .icon {
            max-height: 100px;
        }

        .heading {
            font-size: 1.3em;
        }
        .occ {
            width: max-content;
            margin: auto;
            color: mix(white, $accentColour, 30);
            font-size: 1.1em;
            @extend %headerFont;
            border-top: solid 1px $accentColour;
        }
        .small {
            font-size: 0.75em;
        }

        @include large {
            font-size: 1.8em;
        }

    }
</style>