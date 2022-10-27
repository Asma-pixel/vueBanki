<template>
<div class="nav">
  <div class="nav-container">
    <nav-list class="nav-list" :navItems="navItems"></nav-list>
    <find-form class="form"></find-form>
  </div>
  
</div>
</template>
<script>
export default {
  components:  {
    NavList: () => import('./NavList.vue'),
    FindForm: () => import('../FindForm.vue'),
  },
  props: {
    navItems: {
      type: Array,
      required: true,
    },
    UIState: {
      type: Object,
    }
  }
}

</script>
<style>
  .nav {
    display: flex;
    padding:24px 0;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #E1E1E1;
  }
  .nav-container {
    display: flex;
    width: 85%;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 1032px) {
      .form {
        margin-top: 24px;
      }
      
    /* STYLES HERE */
    }
    @media screen and (max-width: 800px) {
      .nav-list {
        display:flex;
        flex-direction: column;
      }
    /* STYLES HERE */
    }
  
  

</style>