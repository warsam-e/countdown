<script lang="ts">
  import { countdown_from, create_item, parse_time } from "$lib/common";
  import { current_time } from "$lib/stores";

  let title = $state("");
  let value = $state("");

  let input_time = $derived(value ? new Date() : null);
  let time = $derived(
    value.length ? parse_time(value, input_time ?? undefined) : null
  );
  let countdown = $derived(time ? countdown_from(time, $current_time) : null);

  const preview = $derived(format_preview(value, countdown));
  const preview_style = $derived(style_preview(value, countdown));

  let valid = $derived(countdown && title.length > 0);

  function format_preview(value: string, countdown: string | null) {
    if (!value) return "...";
    if (countdown) return countdown;
    return "Invalid time";
  }

  function style_preview(value: string, countdown: string | null) {
    if (!value) return "";
    if (countdown) return "valid";
    return "invalid";
  }

  function onsubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!value.length || !title.length || !input_time) return;
    if (!countdown) return;
    create_item({
      title,
      text: value,
      created_at: +input_time,
    });
    title = "";
    value = "";
  }
</script>

<div class="add_view">
  <div class="instruction">
    Enter the time you want to count down from, even in plain english.
  </div>
  <div class="preview style-{preview_style}">{preview}</div>
  <div class="input_time">{input_time?.toLocaleString()}</div>
  <form {onsubmit}>
    <input type="text" bind:value={title} placeholder="Title" required />
    <input type="text" bind:value placeholder="1 hour later" required />
    <button
      type="submit"
      class="button link hover"
      class:hover={valid}
      disabled={!valid}>Create</button
    >
  </form>
</div>

<style lang="scss">
  @use "$styles/theme.scss";
  .add_view {
    height: 10rem;
    border-radius: 1rem;
    background: theme.$base;
    box-shadow: inset 0 0 0 1px rgba(theme.$text, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // gap: 1rem;
    padding: 1rem;
    > .instruction {
      font-size: 0.8rem;
      opacity: 0.6;
      font-weight: 600;
    }
    > .preview {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      &.style-valid {
        color: theme.$green;
      }
      &.style-invalid {
        color: theme.$red;
      }
    }
    > .input_time {
      text-align: center;
      font-size: 1rem;
      font-weight: 600;
      opacity: 0.6;
    }
    > form {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: 100%;
      > input {
        width: 100%;
        height: 2rem;
        border: unset;
        padding: 0 0.5rem;
        color: theme.$text;
        background: theme.$surface0;
        border-radius: calc(2rem / 4.4);
        box-shadow: inset 0 0 0 1px rgba(theme.$text, 0.05);
      }
    }
  }
</style>
