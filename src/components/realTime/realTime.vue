<template>
  <div>
    <el-row>
      <el-col :span="4" class="nav">
        <el-input class="nav-input" v-model="input" placeholder="输入摄像机名称搜索" @keyup.native="filterData(input)" :style="inputStyle" prefix-icon="el-icon-search"></el-input>
        <el-table class="nav-table" :data="cameraList.data" border max-height="500" style="width: 180px" highlight-current-row @current-change="handleCurrentRowsChange" :show-header="false">
          <el-table-column prop="name" label="摄像机" width="179px"></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="20">
        <div class="player">
          <div class="playBody">
            <div v-if="playCount == 1">
              <div>
                {{currentRow[0].stream}}
              </div>
            </div>
            <div v-if="playCount == 4" class="playerGroup">
              <el-row>
                <el-col :span="12" class="playerGroupItem">{{currentRow[0].stream}}</el-col>
                <el-col :span="12" class="playerGroupItem">2</el-col>
              </el-row>
              <el-row>
                <el-col :span="12" class="playerGroupItem">3</el-col>
                <el-col :span="12" class="playerGroupItem">4</el-col>
              </el-row>
            </div>
          </div>
          <div class="playFooter">
            <el-row>
              <el-col :span="2" :offset="20" class="left-btn">
                <el-button type="text info" @click="playCount = 1">■</el-button>
              </el-col>
              <el-col :span="2">
                <el-button type="text info" icon="el-icon-menu" @click="playCount = 4"></el-button>
              </el-col>

            </el-row>
          </div>
        </div>
      </el-col>
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
      currentRow: [
        {
          stream: 1
        },
        {
          stream: ''
        },
        {
          stream: ''
        },
        {
          stream: ''
        }
      ],
      inputStyle: {
        width: '180px'
      },
      playCount: 1
    }
  }, //
  mounted: function () {
    this.$nextTick(function () {
      this.$http({
        method: 'GET',
        url: '/controller/cameras/cameraNames'
      }).then((res) => {
        this.cameraList.data = res.data
        this.cameraListCopy.data = res.data
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
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleCurrentRowsChange (val) {
      if (this.playCount === 1) {
        this.currentRow[0]['stream'] = val.stream
      } else {
        if (this.currentRow.length === 1) {
          this.currentRow[0]['stream'] = val.stream
        } else if (this.currentRow.length === 2) {
          this.currentRow[2] = val
        } else if (this.currentRow.length === 3) {
          this.currentRow[3] = val
        } else if (this.currentRow.length === 4) {
          this.currentRow[1] = val
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.nav{
  text-align: center;
  .nav-input{
    margin:10px auto;
  }
  .nav-table{
    margin:0 auto;
  }
}
.player{
  margin: 0 30px 0 0;
  background: aqua;
  height: 580px;
  .playBody{
    width: 100%;
    height: 540px;
    .playerGroupItem{
      height:270px;
    }
  }
  .playFooter{
    width: 100%;
    height: 40px;
    background: #D7D7D7;
    .el-button{
      padding: 0;
    }
    .el-button--text{
      font-size: 20px;
      line-height: 40px;
      vertical-align: center;
    }
    .left-btn .el-button--text{
      font-size: 40px;
      margin-top: -5px;
    }
  }
}
</style>
