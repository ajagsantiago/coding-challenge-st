<template>
    <JsonForms
      :data="data"
      :renderers="Object.freeze(renderers)"
      :schema="schema"
      :uischema="uischema"
      :additional-errors="additionalErrors"
      @change="onChange"
      class="forms"
      ref="data"
    />
</template>

<script setup lang="ts">
  import { JsonForms, type JsonFormsChangeEvent } from '@jsonforms/vue';
  import { vanillaRenderers } from '@jsonforms/vue-vanilla';
  import { schema, uischema } from '@/schemas/schemas';
  import { ref } from 'vue';
  import { renderers as customRenderers } from '@/renderers/renderers';
  import { type ErrorObject } from 'ajv';

  const renderers = [
    ...vanillaRenderers,
    ...customRenderers
  ];

  const currentAge = ref(null);
  const additionalErrors: ErrorObject[] = [];

  const data = ref({
    "forename": '',
    "surname": '',
    "age": currentAge,
    "birthDate": new Date(),
    "emailAddress": ''
  } ) ;

  const checkAge = (birthdate: Date): number  => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  const onChange = (event: JsonFormsChangeEvent) => {
    const birthDate = new Date(event.data['birthDate']);
    const age = checkAge(birthDate);

    if (age > 18) {
      //
    }
  }
</script>

<style scoped>
  .forms {
    width: 100%;
    margin: 0 auto;
    padding: 15px;
  }

  .horizontal-layout-item:nth-child(4) {
    display: none;
    border: none;
    visibility: hidden;
  }
</style>
