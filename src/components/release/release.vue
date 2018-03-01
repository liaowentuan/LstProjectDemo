<template>
  <div class="release">
    <div class="menu">
      <!--<ul>
        <li><router-link to="realTime"><el-button>请假管理</el-button></router-link></li>
        <li><router-link to="realTime"><el-button>放行管理</el-button></router-link></li>
        <li><router-link to="realTime"><el-button>请假管理</el-button></router-link></li>
      </ul>-->
      <el-radio-group v-model="item" style="margin-bottom: 30px;" @change="tabClick(item)">
        <el-radio-button label="first">请假管理</el-radio-button>
        <el-radio-button label="second">放行管理</el-radio-button>
        <el-radio-button label="third">请假管理</el-radio-button>
      </el-radio-group>
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
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'release',
  data () {
    return {
      msg: 'this is release',
      item: 'first',
      name: ''
    }
  },
  methods: {
    tabClick (item) {
      this.$router.replace({path: `/home/release/${item}`})
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
      return this.$store.state.count
    }
  }
}
</script>

<style scoped lang="less">
  .release{
    .menu{
      border-bottom: 5px solid #f2f2f2;
      padding:10px 20px;
    }
    .el-radio-button:focus{
      box-shadow: none !important;
    }
  }
</style>
