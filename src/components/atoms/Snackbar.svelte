<script>
import { snackbar, updateSnackbar } from "../../store";


    export let readable = 'Hello'

    let timeout = () => updateSnackbar(null)

    snackbar.subscribe(value => {
        readable = value
        clearTimeout(timeout)

        if (value != null)
            setTimeout(timeout, 3000)
    })
</script>

<div class="snackbar {readable ? 'active' : ''}">
    {@html readable}
</div>

<style lang="scss">
    @import '../../sass/main';

    .snackbar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: $accentColour;
        padding: 8px 14px;
        min-height: 36px;
        color: white;
        text-align: center;
        opacity: 0;
        box-sizing: border-box;
        transition: ease all 0.25s;

        &.active {
            opacity: 1;
        }
    }
</style>