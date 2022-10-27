
<template>
  <div>
    <navigation :navItems="navItems"></navigation>
    <picture-list></picture-list>

  </div>
  
 

</template>
<script>
import _ from 'lodash';
export default {
  
  components: {
    navigation: () => import('./comonents/Navigation/Navigation.vue'),
    PictureList: () => import('./comonents/Main/PictureList.vue'),
  },

  data(){
    return {
      navItems: 
      [
        {id: _.uniqueId(), name: 'Каталог'},
        {id: _.uniqueId(), name: 'Доставка'},
        {id: _.uniqueId(), name: 'Оплата'},
        {id: _.uniqueId(), name: 'Контакты'},
        {id: _.uniqueId(), name: 'О компании'},
      ],
      
    }
  }
}
</script>
<style>
  
</style>