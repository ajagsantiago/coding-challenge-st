<template>
    <JsonForms
      :data="data"
      :renderers="Object.freeze(renderers)"
      :schema="schema"
      :uischema="uischema"
      @change="onChange"
      class="forms"
    />
</template>

<script setup lang="ts">
  import { JsonForms, type JsonFormsChangeEvent } from '@jsonforms/vue';
  import { vanillaRenderers } from '@jsonforms/vue-vanilla';
  import { schema, uischema } from '@/schemas/schemas';
  import { ref, watch } from 'vue';
  import { renderers as customRenderers } from '@/renderers/renderers';

  const renderers = [
    ...vanillaRenderers,
    ...customRenderers
  ];

  const profileDetailsForm = ref(null);
  const currentAge = ref(0);
  const validationError = ref('');

  const data = ref({
    "forename": '',
    "surname": '',
    "age": currentAge,
    "birthDate": new Date(),
    "emailAddress": ''
  } ) ;



  const submitForm = () => {
    console.log('Form submitted with data:', data.value);
  };

  const validateForm = () => {
    validationError.value = '';

    if (!data.value.forename) {
      validationError.value = 'Forename(s) is required.';
      return false;
    }

    if (!data.value.surname) {
      validationError.value = 'Surname is required.';
      return false;
    }

    if (!data.value.birthDate) {
      validationError.value = 'Date of Birth is required.';
      return false;
    }

    if (!data.value.emailAddress) {
      validationError.value = 'Email Address is required.';
      return false;
    }
  }



  // watch(checkAge, (value) => {
  //   console.log(checkAge(data.value.birthDate));
  // });

  // if (value) {
  //     uiSchema.value.elements[3].rule?.condition.expectedValue = true;
  //   } else {
  //     uiSchema.value.elements[3].rule?.condition.expectedValue = false;
  //   }

  // const onSubmit = () => {
  //   validateForm();
  // }

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

  watch(
    () => currentAge,
    (age) => {
      console.log("age", age);
      currentAge.value = 18;
    }
  )

  const onChange = (event: JsonFormsChangeEvent) => {
    const birthDate = new Date(event.data['birthDate']);
    const age = checkAge(birthDate);



    if (age > 18) {
      currentAge.value = 18;
    }

    console.log(currentAge);

    validateForm();

    //uischema?.elements?.find(item => item.scope === "#/properties/emailAddress/properties/oneOfEnum")?.rule?.condition?.schema?.expectedValue == true

    //schemaPath
    // console.log("FormEvent", formEvent?.errors[0].parentSchema?.properties);

    // if (checkAge(birthDate)) {
    //   let value = uischema?.elements?.find(item => item.scope === "#/properties/emailAddress/properties/oneOfEnum")?.rule?.effect;
    //   value['ENABLE'];
    //   console.log(uischema?.elements?.find(item => item.scope === "#/properties/emailAddress/properties/oneOfEnum")?.rule?.effect);

    // }

    // if (checkAge(birthDate)) {
    //   let value = uischema?.elements?.find(item => item.scope === "#/properties/emailAddress/properties/oneOfEnum")?.rule?.condition?.expectedValue;
    //   value = true;
    //   console.log("18", value);

    // } else {
    //   let value = uischema?.elements?.find(item => item.scope === "#/properties/emailAddress/properties/oneOfEnum")?.rule?.condition?.expectedValue;
    //   value = false;
    //   console.log("!18", value);
    // }

    // if (checkAge(birthDate)) {
    //   console.log(uischema.elements.find(control => control.scope === "#/properties/emailAddress/properties/oneOfEnum")?.rule)
    // }
    // checkAge(profileDetailsForm.value.)data.value.birthDate
  }
</script>

<style scoped>


  .forms {
    width: 100%;
    margin: 0 auto;
    padding: 15px;

  }
</style>
