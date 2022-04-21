<svelte:options tag="b-card" />

<script>
  export let type = "",
    width = "",
    height = "";
  import { onMount } from "svelte";
</script>

<article
  class={type}
  style={`height: ${height}; width: ${width};`}
  {...$$restProps}
>
  <slot />
</article>

<style>
  @import "./cdn/beer.min.css";
</style>
