<svelte:options tag="b-input" />

<script>
  export let type = "border",
    label = "",
    helper = "",
    error = "",
    placeholder = "",
    value = "",
    prefix = {},
    suffix = {},
    el;
  import { onMount, afterUpdate } from "svelte";
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
  afterUpdate(function () {
    if (placeholder) {
      // If I don't add this manually, Svelte places an empty placeholder attribute which messes with the css querying of Beer Css
      el.placeholder = placeholder;
    }
  });
</script>

<div
  class={"field " +
    (error ? "invalid " : "") +
    (label ? "label " : "") +
    (prefix.type ? "prefix " : "") +
    (suffix.type ? "suffix " : "") +
    type}
>
  {#if prefix.type == "icon"}
    <i>{prefix.name}</i>
  {:else if prefix.type == "image"}
    <img src={prefix.src} alt="Input Avatar" class="circle" />
  {/if}
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
  {#if suffix.type == "icon"}
    <i>{suffix}</i>
  {:else if suffix.type == "image"}
    <i>{suffix.src}</i>
  {/if}
</div>

<style>
  @import "./cdn/beer.min.css";
</style>
