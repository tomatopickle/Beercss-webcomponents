<svelte:options tag="b-checkbox" />

<script>
  export let label = "",
    checked = false,
    disabled = false;
</script>

<label class="checkbox">
  <input type="checkbox" bind:checked {disabled} />
  <span>{label}</span>
</label>

<style>
  @import "./cdn/beer.min.css";
</style>
