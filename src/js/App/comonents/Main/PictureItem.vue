<template>
  <div class="item" >
    <img :src="pictureItem.image">
    <div class="picture">
    <div class="title">
      <h5>{{pictureItem.name}}</h5>
      <h5>{{pictureItem.author}}</h5> 
    </div>
    
    <div class="content" v-if="pictureItem.isAvailable">
      <div  class="prices" v-if="pictureItem.newPrice == pictureItem.oldPric">
          <p>{{pictureItem.newPrice}}</p>
        </div>
      <div class="prices" v-else>
          <p>{{pictureItem.newPrice}}</p>
          <p>{{pictureItem.oldPrice}}</p>
      </div>
      <my-button
       v-bind:disabled="isDisabled"
       @btnClick="buyCLick"
      >
      {{stateOrder}}
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
    },
    data( ) {
      return {
        stateOrder: 'Купить',
        isDisabled:false,
      }
    },
  
    props: {
      pictureItem: {
        type: Object,
        required: true,
      }
    },
    methods: {
      buyCLick(e){
         this.stateOrder = 'Обработка';
         this.isDisabled = true;
         setTimeout(()=>{this.stateOrder = 'В корзине'; this.isDisabled = true}, 2000);
      },
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
      margin-right:48px;
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
      }
    }
    .content {
      display: flex;
      align-items: center;
      justify-content: space-around;
      
    }
    .sales{
        p{
          font-weight: 700;
          font-size: 16px;
          margin: 34px 70px 38px 24px;
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

  </style>