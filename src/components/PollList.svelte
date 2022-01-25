<script>
  import { fade, slide, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  import PollStore from "../store/PollStore";
  import PollDetails from "./PollDetails.svelte";
</script>

<div class="poll-list" out:slide>
  {#each $PollStore as poll (poll.id)}
    <div
      in:fade={{ duration: 2000 }}
      out:scale|local
      animate:flip={{ duration: 500 }}
    >
      <div><PollDetails {poll} /></div>
    </div>
  {/each}
</div>

<style>
  .poll-list {
    margin: auto 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
