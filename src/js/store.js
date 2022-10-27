import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
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
        isInCart: true,
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
      ],
    findName: '',
  },
 
  mutations: {
    addInCart(state, id) {
      console.log(id);
      const item = state.pictureItems.find(item => item.id === id);
      console.log(item);
      item.isInCart = true;
    },

  }
})
export default store;