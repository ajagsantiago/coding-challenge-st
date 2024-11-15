<script setup lang="ts">
  import NavigationBar from './components/NavigationBar.vue';
  import MainContent from './components/MainContent.vue';
  import Sidebar from './components/Sidebar/SideBar.vue';
</script>

<template>
  <NavigationBar>

  </NavigationBar>
  <div>
    <Sidebar />
    <MainContent />
  </div>
</template>

<style scoped>
  div {
    display: flex;
    flex-direction: row;
  }
</style>


