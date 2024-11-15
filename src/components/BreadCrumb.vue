<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="rtl:space-x-reverse">
      <li>
          <IconHome class="home" />
          <IconCaretRight />
      </li>
      <li>
          Profile
          <IconSlash class="slash" />
      </li>
      <li>
          Profile Details
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
  import IconHome from './icons/IconHome.vue';
  import IconCaretRight from './icons/IconCaretRight.vue';
  import IconSlash from './icons/IconSlash.vue';
</script>

<style scoped>
  nav {
    display: flex;
  }

  ol {
    display: inline-flex;
    align-items: center;
    margin: 2px 0 2px 0;
  }

  li {
    display: inline-flex;
    align-items: center;
  }

  li:not(:first-child) {
    padding-left: 8px;
  }

  .home {
    margin-right: 8px;
  }

  .slash {
    margin-left: 8px;
  }

</style>

