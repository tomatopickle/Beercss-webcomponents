<svelte:options tag="b-button" />

<script>
  export let type = "";
</script>

<button class={type} {...$$restProps}><slot /></button>

<style>
  @import "./cdn/beer.min.css";
</style>
