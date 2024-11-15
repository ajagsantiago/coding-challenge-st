<template>
  <footer class="bottom-0">
    <NextButton @click="onSubmit" :disabled="!isFormValid" class="next-button">
    </NextButton>
  </footer>
</template>

<script setup lang="ts">
  import NextButton from './NextButton.vue';
  import { defineProps, type PropType, ref } from 'vue';

  const props = defineProps({
    onSubmit: {
      type: Function as PropType<() => void>,
      required: true,
    },
    isFormValid: {
      type: Boolean as PropType<(boolean)>,
      required: true
    }
  });

  const isFormValid = ref(props.isFormValid);


</script>

<style scoped>
  footer {
    position: absolute;
    bottom: 0;
    justify-content: end;
    background-color: white;
    height: 68px;
    align-items: center;
    width: calc(100% - 68px)
  }

  .next-button {
    display: flex;
    flex-direction: row;
  }

  .next-button:disabled {
    opacity: 20%;
    cursor: not-allowed;
  }
</style>
