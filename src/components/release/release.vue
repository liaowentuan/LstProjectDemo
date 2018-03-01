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
      item: 'first'
    }
  },
  methods: {
    tabClick (item) {
      this.$router.replace({path: `/home/release/${item}`}) // path: `/user/${userId}`
      // this.$router.push({ path: 'home' })
      // this.router.push({name: 'home/release/' + item, params: { userId: '123' }})
    }
  }
}
</script>

<style scoped lang="less">
  .release{
    .menu{
      border-bottom: 5px solid #f2f2f2;
    }
    .el-radio-button:focus{
      box-shadow: none !important;
    }
  }
</style>
