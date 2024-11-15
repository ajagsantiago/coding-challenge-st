<template>
    <label>
      {{ label.text }}
    </label>
</template>

<script setup lang="ts">
import { type LabelElement, } from '@jsonforms/core';
import { rendererProps, useJsonFormsLabel } from '@jsonforms/vue';
// import { Label } from "@progress/kendo-vue-labels";
import { useVanillaLabel } from '@jsonforms/vue-vanilla';

const props = defineProps({
  ...rendererProps<LabelElement>(),
})

const { label } = useVanillaLabel(
  useJsonFormsLabel(props),
);
</script>
