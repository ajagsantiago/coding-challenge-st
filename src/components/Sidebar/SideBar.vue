<script setup lang="ts">
  import IconFirmDetails from '../icons/IconFirmDetails.vue';
import IconPermission from '../icons/IconPermission.vue';
import SideBarItem from './SideBarItem.vue';
</script>

<template>
  <aside>
    <div>
        <ul>
          <SideBarItem href="/firm-details">
            <template #icon>
              <IconFirmDetails />
            </template>
            <template>
              Firm Details
            </template>
          </SideBarItem>
          <SideBarItem href="/firm-details">
            <template #icon>
              <IconPermission />
            </template>
            <template>
              Firm Details
            </template>
          </SideBarItem>
        </ul>
    </div>
  </aside>
</template>

<style scoped>
  aside {
    z-index: 40;
    height: calc(100vh - 55px);
    width: 60px;
    border-radius: 8px;
  }

  div {
    height: 100%;
    padding: 16px 12px;
    border-right: 1px solid var(--richdale-gray);
  }
</style>
