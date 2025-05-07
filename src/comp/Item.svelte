<script lang="ts">
  import { countdown_from, parse_time, remove_item } from "$lib/common";
  import { current_time } from "$lib/stores";
  import type { CountdownItem } from "$lib/types";

  interface Props {
    item: CountdownItem;
  }

  let { item }: Props = $props();

  let date = $derived(parse_time(item.text, new Date(item.created_at)));
  const time = $derived(format_time(date, $current_time));

  function format_time(date: Date | null, current: Date) {
    if (!date) return "Invalid time";
    let res = countdown_from(date, current);
    if (!res.length) return "Complete!";
    return res;
  }

  function remove() {
    if (!confirm("Are you sure you want to remove this item?")) return;
    remove_item(item.id);
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="item">
  <div class="meta">
    <div class="text">"{item.text}"</div>
    <div class="created_at">
      <i class="f7-icons">clock</i>
      <span>{new Date(item.created_at).toLocaleString()}</span>
    </div>
  </div>
  <div class="remove link hover" onclick={remove}>
    <i class="f7-icons">trash</i>
  </div>
  <div class="info">
    <div class="title">{item.title}</div>
    <div class="time">
      <i class="f7-icons">timer</i>
      <span>{time}</span>
    </div>
  </div>
</div>

<style lang="scss">
  @use "$styles/theme.scss";
  .item {
    height: 10rem;
    border-radius: 1rem;
    background: theme.$base;
    box-shadow: inset 0 0 0 1px rgba(theme.$text, 0.05);
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    > .meta {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      > .text {
        font-size: 0.8rem;
        font-style: italic;
        opacity: 0.6;
      }
      > .created_at {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        opacity: 0.6;
        font-size: 0.8rem;
        > i {
          font-size: 1rem;
        }
      }
    }
    > .remove {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      border-radius: 0.5rem;
      background: theme.$red;
      height: 2rem;
      width: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      > i {
        font-size: 1rem;
        color: theme.$base;
      }
    }
    > .info {
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      > .title {
        opacity: 0.5;
        font-size: 1.5rem;
      }
      > .time {
        font-size: 2.5rem;
        font-weight: 600;
      }
    }
  }

  @media only screen and (max-width: 820px) {
    .item {
      > .info {
        > .title {
          font-size: 1.2rem;
        }
        > .time {
          font-size: 2rem;
        }
      }
    }
  }
</style>
