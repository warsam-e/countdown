<script lang="ts">
  import { current_time } from "$lib/stores";

  const time = $derived(
    Intl.DateTimeFormat("en", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    }).format($current_time)
  );

  const date = $derived(
    Intl.DateTimeFormat("en", {
      dateStyle: "full",
    }).format($current_time)
  );
</script>

<div class="current_time_view">
  <div class="title">
    <i class="f7-icons">clock</i>
    <span>Current Time</span>
  </div>
  <div class="time">{time}</div>
  <div class="date">{date}</div>
</div>

<style lang="scss">
  @use "$styles/theme.scss";
  .current_time_view {
    width: 100%;
    height: 10rem;
    background: theme.$base;
    border-radius: 1rem;
    box-shadow: inset 0 0 0 1px rgba(theme.$text, 0.05);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    > .title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      opacity: 0.6;
      > i {
        font-size: 1rem;
      }
    }
    > .time {
      font-size: 2rem;
      font-weight: 600;
    }
    > .date {
      font-size: 1.2rem;
      opacity: 0.6;
    }
  }
</style>
