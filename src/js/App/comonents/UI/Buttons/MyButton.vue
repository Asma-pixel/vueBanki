<template>
  <button @click="btnClick" class="myBtn">
    <slot></slot>
  </button> 
</template>

<script>
export default {
  name: 'my-button',
  methods: {
    btnClick () {
      this.$emit('btnClick')
    }
  }
}
</script>

<style lang="scss" scoped >
.myBtn {
  background: #382E2B;
  padding: 14px 28px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: #ffff;
  border: none;
  border-radius: 0%;
  outline: none;
  &:hover{
    background: #776763;
    border: none;
  }
  &:focus{
    background: #776763;
    border: none;
  }
  &:active {
    outline-width: 0px;
    border: none;
    background: #5B3A32;
  }
  &:disabled{
    background: #C1B4B1;
  }
}
</style>