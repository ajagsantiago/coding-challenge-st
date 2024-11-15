import { controlRenderers } from '@/renderers/control';
// import { layoutRenderers } from '@jsonforms/vue-vanilla';
import { customLayoutRenderers } from './layout';

export const renderers = [
  ...controlRenderers,
  ...customLayoutRenderers,
];
