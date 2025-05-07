<script lang="ts">
  import "$styles/global.scss";
  import "framework7-icons/css/framework7-icons.css";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  const { children } = $props();

  let mounted = $state(false);
  onMount(() => (mounted = true));
</script>

{#if mounted}
  <div in:fade={{ duration: 200 }}>
    {@render children?.()}
  </div>
{/if}

<style lang="scss">
  div {
    max-width: 40rem;
    margin: 0 auto;
    padding: 2rem 1rem 3rem;
  }
</style>
