<svelte:options tag="b-modal" />

<script>
  export let open = false,
    position = "";
  import { onMount, afterUpdate } from "svelte";
</script>

<div class={"modal " + (open ? "active " : "") + position}>
  <slot />
</div>

<style>
  @import "./cdn/beer.min.css";
</style>
