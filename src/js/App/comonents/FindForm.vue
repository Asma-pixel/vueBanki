<template>
  <form @submit.prevent>
    <find-input
      v-focus
      type="text"
      placeholder="Поиск по названию картины"
      @myInput="alert('fads')"
    />
    <my-button  @click="" style="padding: 13px 36px">Найти</my-button>
    
  </form>
</template>

<script>
export default {
  components: {
    FindInput: () => import('./UI/Inputs/FindInput.vue'),
    MyButton: () => import('./UI/Buttons/MyButton.vue')
  },
  data() {
    return {
      product: {
        name: '',
      }
    }
  },
  methods: {
    a(){
      alert('asdfafd')
    }
  },
}
</script>

<style scoped>
form {
  display: flex;
}
</style>