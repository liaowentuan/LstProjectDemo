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
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<style scoped>

</style>
