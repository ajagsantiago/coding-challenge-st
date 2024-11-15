<template>
    <h3>{{ title }}</h3>
</template>

<script setup lang="ts">
  defineProps({
    title: { type: String, required: true },
  })
</script>

<style scoped>
  h3 {
    color: var(--richdale-brand-primary);
    font-weight: 700;
    font-size: 20px;
    padding-top: 20px;
  }
</style>
