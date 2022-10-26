<template>
  <div class="pictureList">
    <div class="pictureListContainer">
      <h1>Картины эпохи Возрождения</h1>
      <div class="pictureContainer">
        <picture-item
          v-for="pictureItem in pictureItems"
          :pictureItem="pictureItem"
          :key="pictureItem.id"
          
      />
      </div>
     
      
    </div>
   
  </div>
  </template>
  <script>
  export default {
    components:  {
      PictureItem: () => import('./PictureItem.vue'),
    },
    props: {
      pictureItems: {
        type: Array,
        required: true,
      }
    }
  }
  
  </script>
  <style lang="scss" scoped>
  h1 {
    margin-bottom: 37px;
  }
    .pictureList {
      display: flex;
      justify-content: center;
      padding-top: 45px;
    }
    .pictureListContainer {
      width: 80%;
    }
    .pictureContainer {
      display: flex;
    }

  </style>