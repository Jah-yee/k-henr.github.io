<script lang="ts">
    import { page } from "$app/state";
    import { errorTexts } from "$lib/data/error-texts";
</script>

<section>
    <h1>{page.status}: {page.error?.message}</h1>
    {#if errorTexts[page.status] !== undefined}
        <p>{errorTexts[page.status]}</p>
    {/if}
    <p><a href="/">Back to the home page</a></p>
</section>
