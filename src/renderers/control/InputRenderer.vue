<template>
  <div class="input-container">
    <label class="input-label" :for="control.id">
      {{ control.label }}
    </label>
    <KInput
      @change="onChange"
      :id="control.id + '-input'"
      :disabled="!control.enabled"
      :editor-id="control.label"
      :required="control.required"
      :validation-message="control?.uischema?.options?.errors.empty"
      :validity-styles="false"
      class="input-field"
    >
    </KInput>
    <div v-if="validationError" class="error-message">
        {{ validationError }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { type ControlElement, } from '@jsonforms/core';
  import { rendererProps, useJsonFormsControl } from '@jsonforms/vue';
  import { Input as KInput } from '@progress/kendo-vue-inputs';
  import { ref } from 'vue';

  const props = defineProps({
    ...rendererProps<ControlElement>(),
  })

  const { handleChange, control } = useJsonFormsControl(props);
  const validationError = ref('');

  const validate = () => {
    if (!control.value.data) {

      validationError.value = control.value.uischema?.options?.errors.empty;
      return false;
    }
  }

  const onChange = (event: Event) => {
    handleChange(control.value.path, (event.target as HTMLInputElement).value);
    validate();

    console.log("Updated control.data: ", control.value.data);
    console.log("Possible Errors: " + control.value.errors);
    console.log(control.value.visible);
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

  .error-message {
    color: var(--richdale-error-primary);
  }

  @media (min-width: 768px) {
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
