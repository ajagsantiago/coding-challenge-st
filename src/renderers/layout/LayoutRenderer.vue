<!-- <template>
  <div>
    <div>Layout renderer</div>
    <div>
      Schema:
      <pre>{{ JSON.stringify(schema, null, 2) }}</pre>
    </div>
    <div>
      UI Schema:
      <pre>{{ JSON.stringify(uischema) }}</pre>
    </div>
    <div>
      Path:
      <pre>{{ path }}</pre>
    </div>
    <div>
      Computed Props:
      <pre>{{ JSON.stringify(layout, null, 2) }}</pre>
    </div>
    <div>Children:</div>
    <div
      v-for="(element, index) in layout.uischema.elements"
      :key="`${layout.path}-${index}`"
    >
      <dispatch-renderer
        :schema="layout.schema"
        :uischema="element"
        :path="layout.path"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { type Layout } from '@jsonforms/core';
  import { DispatchRenderer, rendererProps, useJsonFormsLayout } from '@jsonforms/vue';
  import { useVanillaLayout } from '@jsonforms/vue-vanilla';
  import { computed } from 'vue';

  const props = defineProps({
    ...rendererProps<Layout>(),
  });

  const { styles, layout } = useVanillaLayout(
    useJsonFormsLayout(props),
  );

  const layoutClassObject = computed(() => {
    return layout.value.direction === 'row'
      ? styles.horizontalLayout
      : styles.verticalLayout;
  });
</script> -->
<template>
  <div></div>
</template>
