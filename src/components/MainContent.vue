<template>
  <main>
    <ProfileDetail>
      <template #default>
          <ProfileDetailsForm ref="profileDetailsForm" />
      </template>
    </ProfileDetail>
    <MainFooter :onSubmit="handleSubmit" class="footer" />
  </main>
</template>

<script setup lang="ts">
  import ProfileDetail from './ProfileDetail.vue';
  import ProfileDetailsForm from './ProfileDetailsForm.vue';
  import MainFooter from './MainFooter.vue';
  import { ref } from 'vue';

  const profileDetailsForm = ref(null);


  const handleSubmit = () => {
    // Access the form's submit method via the reference

    console.log("Value", profileDetailsForm.value)
  };
  // :onSubmit="handleSubmit"
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
