<template>
  <div>
    {{msg}}
    <br>
    {{count}}
  </div>
</template>

<script>
export default {
  name: 'first',
  data () {
    return {
      msg: 'this is first'
    }
  },
  methods: {
    cons (item) {
      console.log('这是底下的方法', item)
    }
  },
  computed: {
    count () {
      this.cons(this.$store.state.count)
      return this.$store.state.count
    }
  }
}
</script>

<style scoped>

</style>
