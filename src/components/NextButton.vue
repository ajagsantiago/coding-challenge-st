<template>
  <button>
      <span class="text">Next</span>
      <span>
        <IconArrowRight class="icon" />
      </span>
  </button>
</template>

<script setup lang="ts">
  import IconArrowRight from './icons/IconArrowRight.vue';
</script>

<style scoped>
  button {
    display: inline-flex;
    padding: 12px 20px;
    height: 44px;
    border-radius: 100px;
    background-color: var(--richdale-brand-primary);
    color: white;
    align-items: center;
    margin-right: 155px;
  }

  button:hover {
    opacity: 80%;
  }

  .icon {
    height: 24px;
  }

  .text {
    margin: 0 8px;
  }
</style>
