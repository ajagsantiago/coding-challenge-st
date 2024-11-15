<template>
  <li>
    <!-- flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group -->
      <a :href="href" class="item">
        <i>
          <slot name="icon"></slot>
        </i>
        <span class="indicator"></span>
        <slot>
          <span class="hidden ms-3">Dashboard</span>
        </slot>

      </a>
  </li>
</template>

<script setup lang="ts">
  defineProps({
    href: { type: String, required: true },
  })
</script>

<style scoped>
  a {
    margin: 15px 0px 15px 0px;
    position: relative;
  }

  .item {
    text-decoration: none;
    color: var(--richdale-brand-primary);
    padding: 8px;
    align-items: center;
    display: block;
    border-radius: 50%;
    transition: color 0.3s;
  }

  .item:hover {
    color: var(--richdale-icon-color-hover);
    background-color: var(--richdale-icon-color);
  }

  span.indicator {
    position: absolute;
    display: block;
    top: 0px;
    right: 0px;
    width: 8px;
    height: 8px;
    background-color: var(--richdale-warning);
    border-radius: 50%;
  }
</style>
