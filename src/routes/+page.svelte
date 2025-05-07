<script>
  import CurrentTimeView from "$comp/CurrentTimeView.svelte";
  import Item from "$comp/Item.svelte";
  import { items } from "$lib/stores";
</script>

<main>
  <CurrentTimeView />
  <div class="list">
    {#each $items as item}
      <Item {item} />
    {/each}
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    > .list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>
