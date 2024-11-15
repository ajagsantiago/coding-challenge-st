<template>
    <div class="input-container">
      <label class="input-label">
        {{ control.label }}
      </label>
      <div class="input-icon-container">
          <KInput
            :id="control.id + '-input'"
            :disabled="!control.enabled"
            :editor-id="control.label"
            type="date"
            class="input-field"
            @change="onChange"
          />

      </div>
    </div>
</template>

<script setup lang="ts">
import { type ControlElement } from '@jsonforms/core';
import { rendererProps, useJsonFormsControl } from '@jsonforms/vue';
import { Input as KInput } from '@progress/kendo-vue-inputs';
import { useVanillaControl } from '@jsonforms/vue-vanilla'

const props = defineProps({
  ...rendererProps<ControlElement>(),
})

const { handleChange, control } = useVanillaControl(
  useJsonFormsControl(props),
  (target) => target.value || undefined
);

const onChange = (event: Event) => {
  handleChange(control.value.path, (event.target as HTMLInputElement).value);
};
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 8px 8px 8px 12px;
    width: 512.5px;
    margin: 11px 0 11px 0;
  }

  label {
    font-weight: 500;
  }

  .input-icon-container {
    position: relative;
    width: 512.5px;
  }

  .calendar {
    position: absolute;
    color: var(--richdale-brand-primary);
    top: 20px;
    right: 8px;
  }

  .calendar:hover {
    color: var(--richdale-icon-color-hover);
    cursor: pointer;
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    right: 8px;
    position: absolute;
    background-image: url("/calendar.svg");
    background-size: 20px 20px;
    padding: 0 8px 8px 0;
    filter: invert(12%) sepia(51%) saturate(3531%) hue-rotate(194deg) brightness(100%) contrast(104%);
  }

  input[type="date"]::-webkit-calendar-picker-indicator:hover {
    filter: invert(76%) sepia(13%) saturate(329%) hue-rotate(175deg) brightness(85%) contrast(78%);
  }

  @media (min-width: 768px) {
    .input-icon-container {
      position: relative;
      width: 100%;
    }
    input {
      padding: 8px 8px 8px 12px;
      width: 100%;
      margin: 11px 0 11px 0;
    }
  }

  @media (min-width: 1024px) {
    body {
      display: flex;
      place-items: center;
    }

    input {
      width: 512.5px;
    }
  }
</style>
