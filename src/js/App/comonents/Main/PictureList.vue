<template>
  <div class="pictureList">
    <div class="pictureListContainer">
      <h1>Картины эпохи Возрождения</h1>
      <div class="pictureContainer">
        <picture-item
          v-for="pictureItem in filteredList"
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
    computed: {
      filteredList: function (){
        const name = this.$store.state.findName.toLowerCase();
      
        return this.$store.state.pictureItems.filter(item => item.name.toLowerCase().includes(name));
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
      flex-wrap: wrap;
    }
    @media screen and (max-width: 850px) {
      .pictureListContainer {
        width: 100%;
        margin: 0 50px;
      }
      .pictureContainer {
        display: flex;
        justify-content: center;
        width: 100%;
      }
    /* STYLES HERE */
    }

  </style>