<template>
  <form @submit.prevent>
    <find-input
      @update="updateInput"
      placeholder="Поиск по названию картины"
      type="text"
    />
    <my-button  @btnClick="findClick" style="padding: 13px 36px">Найти</my-button>
    
  </form>
</template>

<script>

export default {
  components: {
    FindInput: () => import('./UI/Inputs/FindInput.vue'),
    MyButton: () => import('./UI/Buttons/MyButton.vue')
  },
  data(){
    return {
      pictureName: '',
    }
  },
  methods: {
    updateInput(event) {
      this.pictureName = event;
      this.filter()
    },
    findClick() {
      this.filter()
    },
    filter(){
      
      this.$store.commit('changeFindName', this.pictureName );
    },
      
  },
}
</script>

<style scoped>
form {
  display: flex;
}
</style>