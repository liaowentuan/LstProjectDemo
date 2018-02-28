<template>
  <div class="login">
    <el-row>
      <el-col :span="3" class="nav">
        <ul>
          <li><img src="" alt="没有logo"></li>
          <li><router-link to="detail">detail</router-link></li>
          <li><router-link to="main">main</router-link></li>
        </ul>
      </el-col>
      <el-col :span="21">
        <el-row>
          <el-col :span="4" :offset="20">
            <el-row>
              <el-col :span="8"><el-button icon="el-icon-circle-check-outline"></el-button></el-col>
              <el-col :span="8"><el-button icon="el-icon-phone-outline"></el-button></el-col>
              <el-col :span="8"><el-button icon="el-icon-edit-outline"></el-button></el-col>
            </el-row>
          </el-col>
        </el-row>
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: ''
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.login{
  ul{
    list-style: none;
  }
  .nav{
    height: 100%;
    border-right: 1px solid #666;
  }
}
</style>
