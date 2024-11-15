<script setup lang="ts">
  import IconHamburger from './icons/IconHamburger.vue';
  import IconSearch from './icons/IconSearch.vue';
</script>

<template>
  <nav>
    <div class="outer">
      <div class="inner-left">
        <button>
          <IconHamburger class="hamburger"/>
        </button>
        <a href="/" class="logo">
            <img src="/ThisCompanyLogo.svg" alt="This Company Logo" />
            <span class="logo-text">This Company</span>
        </a>
      </div>
      <div class="inner-right">
        <button>
          <IconSearch class="search"/>
        </button>
        <button>
          <img src="/Avatar@2x.png" class="avatar" alt="Avatar" />
        </button>
        <div class="profile-info">
          <div class="name">Forename Surname</div>
          <div class="position">Position</div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  nav {
    background-color: white;
    border-bottom: 1px solid var(--richdale-gray);
    height: 55px;
  }

  .outer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto 0;
    height: 100%;
    padding: 0 20px;
  }

  .inner-left {
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
  }

  .inner-right {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  .hamburger {
    height: 22px;
  }

  .logo.img {
    padding: 0 20px;
    height: 22px;
  }

  .logo-text {
    align-self: center;
    font-size: 20px;
    line-height: 28px;
    font-weight: 700;
    white-space: nowrap;
    padding: 0 10px;
  }

  .avatar {
    height: 32px;
    padding: 0 10px;
  }

  .search {
    height: 40px;
  }

  .profile-info {
    display: flex;
    flex-direction: column;
  }

  .name {
    color: var(--richdale-brand-primary);
    font-weight: 600;
    font-size: 14px;
  }

  .position {
    color: var(--richdale-background-tertiary);
    font-weight: 400;
    font-size: 12px;
  }
</style>
