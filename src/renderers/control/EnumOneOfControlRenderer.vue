<template>
  <div>
    <label class="input-label" :for="control.id + '-input'" :disabled="!control.enabled">
        {{ control.label }}
    </label>
    <select
      :id="control.id + '-input'"
      :value="control.data"
      class="k-input k-input-md k-input-solid k-rounded-md input-field"
      :disabled="!control.enabled"
      :required="control.required"
      @change="onChange"
      ref="selectInput"
    >
    <option key="empty" value="" disabled selected>Select...</option>
    <option
      v-for="optionElement in control.options"
      :key="optionElement.value"
      :value="optionElement.value"
      :label="optionElement.label"
    >
    </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { type ControlElement } from '@jsonforms/core';
import { rendererProps, useJsonFormsOneOfEnumControl } from '@jsonforms/vue';

const props = defineProps({
  ...rendererProps<ControlElement>(),
})

const { handleChange, control } = useJsonFormsOneOfEnumControl(props);

const onChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  handleChange(control.value.path, target.value);
  const selectedIndex = target?.selectedIndex - 1;

  setTimeout(() =>
    alert(`${control.value.options[selectedIndex].value} (${control.value.options[selectedIndex ].label})`)
  , 800);
};
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
  }

  select {
    padding: 8px 8px 8px 12px;
    width: 512.5px;
    margin: 11px 0 11px 0;
  }

  label {
    font-weight: 500;
  }

  label.input-label:disabled {
    color: green;
  }

  @media (min-width: 768px) {
    select {
      padding: 8px 8px 8px 12px;
      width: 100%;
      margin: 11px 0 11px 0;
    }
  }

  @media (min-width: 1024px) {
    select {
      width: 512.5px;
    }
  }
</style>
