import {
  isOneOfEnumControl,
  rankWith,
  type JsonFormsRendererRegistryEntry,
} from '@jsonforms/core';
import EnumOneOfControlRenderer from './EnumOneOfControlRenderer.vue';

export const entry: JsonFormsRendererRegistryEntry = {
  renderer: EnumOneOfControlRenderer,
  tester: rankWith(26, isOneOfEnumControl),
};
