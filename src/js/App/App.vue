
<template>
  <div>
    <navigation :navItems="navItems"></navigation>
    <picture-list :pictureItems="pictureItems"></picture-list>

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
      pictureItems: 
      [
        {
        id:_.uniqueId(), 
        name: "«Рождение Венеры»", 
        author: "Сандро Боттичелли", 
        description: "Идейные соображения высшего порядка, \
                      а также консультация с широким активом обеспечивает широкому кругу (специалистов) участие в \
                      формировании существенных финансовых и административных условий.",
        image: require('@/images/b.svg'),
        isAvailable: true,
        isInCart: false,
        newPrice: '1 000 000 $',
        oldPrice: '2 000 000 $',
        },
        {
        id:_.uniqueId(), 
        name: "«Тайная вечеря»", 
        author: "Леонардо да Винчи", 
        description: "Идейные соображения высшего порядка, \
                      а также консультация с широким активом обеспечивает широкому кругу (специалистов) участие в \
                      формировании существенных финансовых и административных условий.",
        image: require('@/images/dv.svg'),
        isAvailable: true,
        isInCart: false,
        discount: 1,
        newPrice: '3 000 000 $',
        oldPrice: '3 000 000 $',
        },
        {
        id:_.uniqueId(), 
        name: "«Сотворение Адама»", 
        author: "Микеланджело", 
        description: "Идейные соображения высшего порядка, \
                      а также консультация с широким активом обеспечивает широкому кругу (специалистов) участие в \
                      формировании существенных финансовых и административных условий.",
        image: require('@/images/m.svg'),
        isAvailable: true,
        isInCart: false,
        newPrice: '5 000 000 $',
        oldPrice: '6 000 000 $',
        },
        {
        id:_.uniqueId(), 
        name: "«Урок анатомии»", 
        author: "Рембрандт", 
        description: "Идейные соображения высшего порядка, \
                      а также консультация с широким активом обеспечивает широкому кругу (специалистов) участие в \
                      формировании существенных финансовых и административных условий.",
        image: require('/src/images/r.png'),
        isAvailable: false,
        isInCart: false,
        }
      ]
    }
  }
}
</script>
<style>
  
</style>