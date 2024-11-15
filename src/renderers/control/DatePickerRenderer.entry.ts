import {
  isDateControl,
  rankWith,
  type JsonFormsRendererRegistryEntry,
} from '@jsonforms/core';
import DatePickerRenderer from './DatePickerRenderer.vue';
export const entry: JsonFormsRendererRegistryEntry = {
  renderer: DatePickerRenderer,
  tester: rankWith(22, isDateControl),
};
