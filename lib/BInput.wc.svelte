<svelte:options tag="b-input" />

<script>
  export let type = "border",
    label = "",
    helper = "",
    error = "",
    value = "",
    el;
  import { onMount } from "svelte";
  import {
    onFocusInput,
    onBlurInput,
    updateInput,
    onClickLabel,
  } from "./functions/input.js";
  onMount(function () {
    on(el, "focus", onFocusInput);
    on(el, "blur", onBlurInput);
    on(el, "blur", onBlurInput);
    updateInput(el);
  });
</script>

<div
  class={"field " + (error ? "invalid " : "") + (label ? "label " : "") + type}
>
  <input bind:value bind:this={el} {...$$restProps} />
  {#if label}
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label on:click={onClickLabel(el)}>{label}</label>
  {/if}
  {#if helper}
    <span class="helper">{helper}</span>
  {/if}
  {#if error}
    <span class="error">{error}</span>
  {/if}
</div>

<style>
  @import "./cdn/beer.min.css";
</style>
