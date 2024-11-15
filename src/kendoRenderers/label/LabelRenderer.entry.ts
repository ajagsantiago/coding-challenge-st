import {
  uiTypeIs,
  rankWith,
  type JsonFormsRendererRegistryEntry,
} from '@jsonforms/core';
import LabelRenderer from './LabelRenderer.vue';
export const entry: JsonFormsRendererRegistryEntry = {
  renderer: LabelRenderer,
  tester: rankWith(999, uiTypeIs('Label')),
};
