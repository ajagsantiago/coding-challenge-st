import {
  isLayout,
  type JsonFormsRendererRegistryEntry,
  rankWith,
} from '@jsonforms/core';

// import LayoutRenderer from './LayoutRenderer.vue';
import { LayoutRenderer as LayoutRenderer} from '@jsonforms/vue-vanilla';

export const entry: JsonFormsRendererRegistryEntry = {
  renderer: LayoutRenderer,
  tester: rankWith(25, isLayout),
};
