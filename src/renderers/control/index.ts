export { default as DatePickerRenderer } from './DatePickerRenderer.vue';
export { default as InputRenderer } from './InputRenderer.vue';
export { default as EnumOneOfControlRenderer } from './EnumOneOfControlRenderer.vue';

import { entry as datePickerRendererEntry } from './DatePickerRenderer.entry';
import { entry as inputRendererEntry } from './InputRenderer.entry';
import { entry as enumOneOfControlRendererEntry } from './EnumOneOfControlRenderer.entry';

export const controlRenderers = [
  datePickerRendererEntry,
  inputRendererEntry,
  enumOneOfControlRendererEntry
];
