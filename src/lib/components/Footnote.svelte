<script lang="ts">
    import type { Snippet } from "svelte";

    const { children }: { children: Snippet } = $props();
    let open = $state(false);
</script>

<button onclick={() => (open = !open)}>[note]</button>
{#if open}
    <span>
        {@render children()}
    </span>
{/if}

<style>
    button {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        font: inherit;
        font-size: small;

        position: relative;
        bottom: 1ex;
    }

    span {
        display: block;
        background-color: var(--footnote-bg);
        border: 1px solid var(--footnote-border);
        padding: 0.5rem;
        margin: 0.5rem;
    }
</style>
