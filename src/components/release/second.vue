<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" @submit.native.prevent>
      <el-row>
        <el-col :span="4">
          <el-form-item label="活动名称">
            <el-input v-model="form.name" @keyup.enter.native="onSubmit"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="table-page">
      <el-table :data="dataList.data" border max-height="500" style="width: 100%" highlight-current-row @current-change="handleCurrentRowsChange"> <!--current-change 选中行时间-->
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="extlib_desc" label="描述" width="180"></el-table-column>
      <el-table-column prop="extlib_id" label="id" width="300"></el-table-column>
      <el-table-column prop="extlib_name" label="名字"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
      <!--size-change长度改变时间  current-change页面改变事件-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'second',
  data () {
    return {
      msg: 'this is second',
      form: {
        name: ''
      },
      dataList: {
        data: []
      },
      pageSize: 10,
      currentPage: 1,
      total: 0,
      currentRow: ''
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    getData (page, size) {
      this.$http({
        method: 'GET',
        url: '/controller/extlibs?page=' + page + '&pagesize=' + size
      }).then((res) => {
        this.dataList.data = res.data.extlibrarys
        this.total = res.data.count
      }).catch((res) => {
        this.dataList.data = [{'extlib_desc': 'sadfasdfasd', 'extlib_id': '07c19f1d-9c05-4a34-b331-7d9ad5f26719', 'extlib_name': '布控库3', 'extlib_status': 1, 'src_id': 20}, {'extlib_create_time': '2018-01-17 16:16:16', 'extlib_desc': '布控库-9', 'extlib_id': '3fda3ef7-66c2-48c9-80c0-50d3651c9500', 'extlib_last_modify': '2018-01-17 16:16:16', 'extlib_name': '新的布控库9', 'extlib_status': 0, 'src_id': 9}, {'extlib_create_time': '2018-01-17 16:00:53', 'extlib_desc': '布控库-6', 'extlib_id': '9d9c2e43-cb02-4e87-98dd-e2c338817497', 'extlib_last_modify': '2018-01-17 16:00:53', 'extlib_name': '新的布控库6', 'extlib_status': 0, 'src_id': 6}, {'extlib_create_time': '2018-01-17 15:23:35', 'extlib_desc': '布控库-5', 'extlib_id': 'f065b216-d82e-409c-98d3-8503bf4a157e', 'extlib_last_modify': '2018-01-17 15:23:35', 'extlib_name': '新的布控库5', 'extlib_status': 0, 'src_id': 5}, {'extlib_create_time': '2018-01-17 14:42:58', 'extlib_desc': '布控库-4', 'extlib_id': 'fc8b7f1d-dbaa-4464-9440-77b3008704ef', 'extlib_last_modify': '2018-01-17 14:42:58', 'extlib_name': '新的布控库4', 'extlib_status': 0, 'src_id': 4}]
        this.total = 100
      })
    },
    handleSizeChange (val) {
      this.pageSize = val
      console.log(`当前页: ${this.currentPage}`, this.pageSize)
      this.getData(this.currentPage, this.pageSize)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      console.log(`当前页: ` + this.currentPage, this.pageSize)
      this.getData(this.currentPage, this.pageSize)
    },
    handleCurrentRowsChange (val) {
      this.currentRow = val
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.getData(1, this.pageSize)
    })
  }
}
</script>

<style scoped>

</style>
