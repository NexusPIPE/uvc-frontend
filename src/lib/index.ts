import Frame from './sdk/Frame.svelte';
import { Gradients as UVCGradients, i18n, type UVCOptions as UVCO } from './sdk/Options.js';

/** The UVC Widget */
export const UVC = Frame;
export default UVC;

export type UVCOptions = Partial<UVCO>;
export const Gradients = UVCGradients;
export const _options_i18n = i18n;