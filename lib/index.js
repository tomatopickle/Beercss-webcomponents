import "./beercss/beer.css";
import "material-dynamic-colors";
export { default as BButton } from './BButton.wc.svelte';
export { default as BBCard } from './BCard.wc.svelte';
export { default as BCheckbox } from './BCheckbox.wc.svelte';
export { default as BInput } from './BInput.wc.svelte';

import {theme} from "./functions/index.js";
theme();
window.theme = theme;