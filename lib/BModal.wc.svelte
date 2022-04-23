<svelte:options tag="b-modal" />

<script>
  export let open = false,
    position = "";
  import { onMount, afterUpdate } from "svelte";
</script>

<div class={"modal " + (open ? "active " : "") + position}>
  <slot />
</div>
<div class={"overlay " + (open ? "active " : "")} />

<style>
  @import "./cdn/beer.min.css";
  /* 
  For now, I have to add this manually to prevent the modal coming behind the overlay 
  See: https://github.com/beercss/beercss/pull/56 
  */
  .overlay {
    z-index: 95;
  }
</style>
