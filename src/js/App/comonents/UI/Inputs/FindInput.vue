<template>
  <input class="input" type="text">
</template>

<script>
export default {
  name: 'my-input',
  methods: {
    
  }
}
</script>

<style scoped lang="scss">
.input {
  padding: 13px 0 13px 16px;
  border: 1px solid #E1E1E1;
  outline: none;
  &:active, :focus{
    border: 1px solid #B5B5B5;
  }
  &:focus{ 
    border: 1px solid #B5B5B5;
  }
}

</style>