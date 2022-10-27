<template>
  <div class="item" >
    <img :src="pictureItem.image" @click="$bvModal.show(pictureItem.id)" id="show-btn">
    <b-modal :id="pictureItem.id" hide-footer>
    <template #modal-title>
      <h3>Описание картины</h3>
    </template>
    <div class="d-block text-center">
      <h1>{{pictureItem.name}}</h1>
      <h2>{{pictureItem.author}}</h2> 
      <p>{{pictureItem.description}}</p>
      <slider 
        :imageSrc = "pictureItem.image"
        :key= "pictureItem.id"
      ></slider>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide(pictureItem.id)">Close</b-button>
  </b-modal>
    <div class="picture">
    <div class="title"  @click="$bvModal.show('bv-modal-example')">
      <h5>{{pictureItem.name}}</h5>
      <h5>{{pictureItem.author}}</h5> 
    </div>
    
    <div class="content" v-if="pictureItem.isAvailable">
      <div  class="prices" v-if="pictureItem.newPrice == pictureItem.oldPrice">
          <p>{{pictureItem.newPrice}}</p>
        </div>
      <div class="prices" v-else>
          <p>{{pictureItem.newPrice}}</p>
          <p>{{pictureItem.oldPrice}}</p>
      </div>
      <my-button
        v-if="pictureItem.isInCart"
        class="button"
      >
        {{stateOrder = 'В корзине'}}
      </my-button>
      <my-button
        v-else
        :disabled="isDisabled"
        @btnClick="buyCLick"
        class="button"
      >
       {{stateOrder === ''? 'Купить' : stateOrder }}
      </my-button>
    </div>
    <div class="sales"  v-else>
      <div></div>
       <p>Продана на аукционе</p>
    </div>
  </div>
  </div>
  
  </template>
  <script>

export default {
    components: {
      MyButton: () => import('../UI/Buttons/MyButton.vue'),
      Slider: () => import('./Slider.vue')
    },
    data() {   
     
      return {
        stateOrder: '',
        isDisabled: false,
        isModal: false,
      }
    },
  
    props: {
      pictureItem: {
        type: Object,
        required: true,
      }
    },
    methods: {
      buyCLick() {
        if (this.stateOrder === 'В корзине') return;
        this.stateOrder = 'Обработка';
        this.isDisabled = true;
        setTimeout(() => { 
          this.stateOrder = 'В корзине';
          this.isDisabled = false;
          this.$store.commit('addInCart', this.pictureItem.id);
        }, 2000);
       
      },
      openModal(event) {
        this.isModal = true;
      }
    }
  }
  
  </script>
  <style lang="scss">
    .title {
      margin: 20px 36px 22px 24px;
      h5 {
        font-size: 18px;
      }
    }
    .item {
      margin:0 48px 40px 0;
      position: relative;
      width: 280px;
    }
    .stub {
      height: 160px; 
      background-color:#fadf;
    }
    .picture {
      border: 1px solid #E1E1E1;
    }
   
    .prices {
      display: flex;
      flex-direction: column;
      p {
        margin: 0;
      }
      p:first-child {
        font-weight: 300;
        font-size: 14px;
        line-height: 150%;
        text-decoration-line: line-through;
        color: #A0A0A0;
      }
      p:last-child {
        font-weight: 700;
        font-size: 14px;
        text-decoration-line: none;
        color: #343030;
      }
    }
    .content {
      display: flex;
      align-items: center;
    
      justify-content: space-around;
      
    }
    .button {
       margin: 22px 0 24px ;
    }
    .sales{
        p{
          font-weight: 700;
          font-size: 16px;
          margin: 34px 70px 59px 24px;
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 150%;
          display: flex;
          align-items: center;
        }
        div {
          position: absolute;
          top:0;
          width: 100%;
          height: 100%;
          background-color: #A0A0A0;
          opacity: 0.4;
        }
    }
    @media screen and (max-width: 350px) {
     .item {
      margin-left: 24px;
     }
    }

  </style>