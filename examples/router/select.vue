<template>
  <div style="width: 300px;">
    <mt-select
    v-model="select1"
    :options="list"></mt-select>
  </div>
</template>

<script>
export default {
  name: 'mtSelectDemo',
  data () {
    return {
      select1: '',
      list: [
        {id: 12, name: '王五'},
        {id: 23, name: '赵四'},
      ]
    }
  }
}
</script>

<style>
</style>
