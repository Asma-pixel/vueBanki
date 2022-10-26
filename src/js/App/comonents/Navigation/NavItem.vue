<template>
  <div class="navItem">
    <h5>{{navItem.name}}</h5>
  </div>
  </template>
  <script>
  export default {
  
    props: {
      navItem: {
        type: Object,
        required: true,
      }
    }
  }
  
  </script>
  <style>
    .navItem {
      margin-right:48px;
      cursor: pointer;
    }

  </style>