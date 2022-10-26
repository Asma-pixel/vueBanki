<template>
  <div class="navList">
    <nav-item
      v-for="navItem in navItems"
      :navItem="navItem"
      :key="navItem.id"
    />
  </div>
  </template>
  <script>
  export default {
    components:  {
      NavItem: () => import('./NavItem.vue'),
    },
    props: {
      navItems: {
        type: Array,
        required: true,
      }
    }
  }
  
  </script>
  <style lang="scss" scoped>
    .navList {
      display: flex;
    }

  </style>