<template>
  <main>
    <ProfileDetail>
      <template #default>
          <ProfileDetailsForm />
      </template>
    </ProfileDetail>
    <MainFooter :onSubmit="handleSubmit" :isFormValid="isFormValid" class="footer" />
  </main>
</template>

<script setup lang="ts">
  import ProfileDetail from './ProfileDetail.vue';
  import ProfileDetailsForm from './ProfileDetailsForm.vue';
  import MainFooter from './MainFooter.vue';
  import { ref } from 'vue';

  const profileDetailsForm = ref(null);
  const isFormValid = ref(false);

  const handleSubmit = () => {
    console.log("Value", profileDetailsForm.value)
  };
</script>


<style scoped>
  main {
    background-color: var(--richdale-gray);
    height: calc(100vh - 55px);
    width: 100%;
  }

  footer {
    display: flex;
    align-items: center;
  }

  .horizontal-layout {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 0 20px;
  }
</style>
