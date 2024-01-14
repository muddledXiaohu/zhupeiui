<template>
  <div>
  <el-table
    :data="tableData"
    :header-cell-style="{ background: '#fff', color: '#919191' }"
    stripe
    height="79vh"
    style="width: 100%;">
    <el-table-column
      label="年份"
      prop="name"/>
    <el-table-column
      label="季度"
      prop="bbb"/>
    <el-table-column
      label="姓名"
      prop="eeee"/>
    <el-table-column
      label="管理单元"
      prop="eeee">
      <template slot-scope="scope">
        <span v-if="scope.$index == 1">
          科秘书
        </span>
      </template>
    </el-table-column>
    <el-table-column
      label="得分"
      prop="eeee">
      <template slot-scope="scope">
        <span v-if="scope.$index == 1" style="color: rgb(8, 148, 22);">
          已分配
        </span>
        <span v-else>
          未分配
        </span>
      </template>
    </el-table-column>
    <el-table-column
      label="奖金"
      prop="eeee"/>
    <el-table-column
      label="操作">
      <template>
        <el-button type="text">详情</el-button>
      </template>
    </el-table-column>
  </el-table>
        <pagination
          v-show="total>0"
          :total="total"
          :page.sync="queryParams.pageNum"
          :limit.sync="queryParams.pageSize"
          @pagination="getList"
        />
  </div>
</template>

<script>
  export default {
    components:{  },
    data() {
      return {
        tableData: [],
        search: '',
        queryParams: {},
        total: 0,
        reportVisible: false
      }
    },
    methods: {
      openSelectUser() {
        this.$refs.select.show();
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      getList(index, row) {
        console.log(index, row);
      },
      getuser(e) {
        console.log(e);
      },
      gos() {
        this.$refs.elimg.clickHandler()
      },
      opCloseUpload() {
        this.reportVisible = !this.reportVisible
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
    },
  }
</script>