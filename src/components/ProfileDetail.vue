<template>
  <div class="profile-detail">
    <TitleHeading title="Profile Detail" />
    <p class="information">
      This is the personal information you use to access and manage your account. Your email address will be used for account security, recovery, and notifications.
    </p>
    <div class="container">
      <TitleHeading title="Details" class="heading" />
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import TitleHeading from './TitleHeading.vue';
</script>


<style scoped>
  .container {
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px; */
    padding: 0 0 20px 0;
    width: 100%;
    border-radius: 8px;
    border: 0.2px solid var(--richdale-disabled);
    background-color: white;
  }

  .heading {
    padding-left: 15px;
    padding-bottom: 15px;
  }

  .information {
    width: 100%;
    height: 76px;
    border-radius: 8px;
    color: var(--richdale-brand-primary);
    background-color: var(--richdale-background-primary);
    border: 0.2px solid var(--richdale-disabled);
    padding: 15px;
    margin: 15px 0;
  }

  .profile-detail {
    max-width: 1536px;
    padding: 0 200px 0 200px;
    margin-top: 20px;
  }

  footer {
    display: flex;
    align-items: center;
  }
</style>
