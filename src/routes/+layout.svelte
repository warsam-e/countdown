<script lang="ts">
  import AddPopup from "$comp/AddPopup.svelte";
  import "$styles/global.scss";
  import "framework7-icons/css/framework7-icons.css";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  const { children } = $props();

  let mounted = $state(false);
  onMount(() => (mounted = true));

  let showing = $state(false);
  let show_add = () => (showing = true);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
{#if mounted}
  <AddPopup bind:showing />

  <div in:fade={{ duration: 200 }}>
    {@render children?.()}

    <div class="button add hover" onclick={show_add}>
      <i class="f7-icons">plus</i>
    </div>
  </div>
{/if}

<style lang="scss">
  @use "$styles/theme.scss";
  div {
    max-width: 40rem;
    margin: 0 auto;
    padding: 2rem 1rem 6rem;
  }

  $buttonSize: 3rem;

  .button.add {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    height: $buttonSize;
    width: $buttonSize;
    border-radius: calc($buttonSize / 4.4);
    box-shadow: 0 0 3rem 0 rgba(theme.$surface0, 1);
    padding: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    > i {
      color: theme.$base;
    }
  }

  @media only screen and (max-width: 820px) {
    .button.add {
      left: 2rem;
      right: 2rem;
      bottom: 2rem;
    }
  }
</style>
