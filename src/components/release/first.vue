<template>
  <div>
    <el-row class="search">
      <el-col :span="5">
        <el-input v-model="name"></el-input>
      </el-col>
      <el-col :span="5" :offset="1">
        <el-button class="el-button--primary" @click="increment">立即查询</el-button>
        <el-button class="el-button--primary" @click="decrement">--</el-button>
        <p>{{count}}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'first',
  data () {
    return {
      msg: 'this is first',
      name: ''
    }
  },
  methods: {
    cons (item) {
      console.log('这是底下的方法', item)
    },
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  },
  computed: {
    count () {
      this.cons(this.$store.state.count)
      return this.$store.state.count
    }
  },
  destroyed () {
    this.$store.commit('setcrement')
  }
}
</script>

<style scoped>

</style>
