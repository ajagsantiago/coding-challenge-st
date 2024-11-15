import {
  isStringControl,
  rankWith,
  type JsonFormsRendererRegistryEntry,
} from '@jsonforms/core';
import InputRenderer from './InputRenderer.vue';
export const entry: JsonFormsRendererRegistryEntry = {
  renderer: InputRenderer,
  tester: rankWith(22, isStringControl),
};
