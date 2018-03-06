<template>
  <div>
    <el-row>
      <el-col :span="4" class="Nav">
        <el-input class="nav-input" v-model="input" placeholder="输入摄像机名称搜索" @keyup.native="filterData(input)" :style="inputStyle" prefix-icon="el-icon-search"></el-input>
        <el-table class="nav-table" :data="cameraList.data" border max-height="500" style="width: 200px" highlight-current-row @current-change="handleCurrentRowsChange" :show-header="false">
          <el-table-column prop="name" label="摄像机" width="199px"></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="20">2</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'realTime',
  data () {
    return {
      msg: 'realTime',
      cameraList: {
        data: []
      },
      cameraListCopy: {
        data: []
      },
      input: '',
      currentRow: {},
      inputStyle: {
        width: '200px'
      }
    }
  }, //
  mounted: function () {
    this.$nextTick(function () {
      this.$http({
        method: 'GET',
        url: '/controller/cameras/cameraNames'
      }).then((res) => {
        this.cameraList.data = this.format(res.data)
        this.cameraListCopy.data = this.format(res.data)
      }).catch((res) => {
        console.log(res)
      })
    })
  },
  methods: {
    filterData (queryString) {
      if (!queryString) {
        this.cameraList.data = this.cameraListCopy.data
      } else {
        this.cameraList.data = this.cameraListCopy.data.filter(this.createFilter(queryString))
      }
      console.log(queryString)
      /* return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      } */
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    format (val) {
      for (let i in val) {
        val[i]['value'] = val[i].name
      }
      return val
    },
    handleCurrentRowsChange (val) {
      this.currentRow = val
    }
  }
}
</script>

<style scoped lang="less">
.Nav{
  text-align: center;
  .nav-input{
    margin:10px auto;
  }
  .nav-table{
    margin:0 auto;
  }
}
</style>
