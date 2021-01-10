<script>
    import Social from "../atoms/Social.svelte"
    import { updateSnackbar } from '../../store'

    let socials = []

    fetch('/data/socials.json')
        .then(blob => blob.json())
        .then(data => {
            socials = data
            console.log('my socials', socials)
        })

    const handleAction = action => {
        switch(action) {
            case 'copyDiscordLink':
                const username = 'jaclynonacloud#8732'
                navigator.clipboard.writeText(username)
                updateSnackbar(`${username} added to clipboard!`)
        }
    }
</script>

<div class="socials">
    {#each socials as { readable, src, href, action=null }}
        <Social
            {src}
            {readable}
            {href}
            {action}
            on:action={({detail}) => handleAction(detail) }
        />
    {/each}
</div>

<style lang="scss">
    @import '../../sass/main';
    
    .socials {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 8px 4px;
        justify-content: center;
        margin: auto;
        text-align: center;
        width: 100%;
        max-width: 50%;
        height: 100%;
        max-height: 60%;

        @include large {
            max-height: 80%;
        }
    }
</style>