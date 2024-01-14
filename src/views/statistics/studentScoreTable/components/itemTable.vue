<template>
  <div>
  <el-table
    :data="tableData"
    :header-cell-style="{ background: '#fff', color: '#919191' }"
    stripe
    height="67vh"
    style="width: 100%;">
      <el-table-column  
        align="center"
        header-align="center"
        label="姓名"
        prop="zszs5"/>
      <el-table-column  
        align="center"
        header-align="center"
        label="工号"
        prop="zszs6"/>
      <el-table-column  
        align="center"
        header-align="center"
        label="管理单元"
        prop="zszs7"/>
      <el-table-column  
        align="center"
        header-align="center"
        label="奖金"
        prop="zszs8"/>
      <el-table-column  
        align="center"
        header-align="center"
        label="科室"
        prop="zszs8"/>
      <el-table-column  
        align="center"
        header-align="center"
        label="专业"
        prop="zszs8"/>
      <el-table-column  
        align="center"
        header-align="center"
        label="界别"
        prop="zszs8"/>
      <el-table-column  
        align="center"
        header-align="center"
        label="培养年限"
        prop="zszs8"/>
      <el-table-column  
        align="center"
        header-align="center"
        label="总分"
        prop="zszs8"/>
      <el-table-column  
        align="center"
        header-align="center"
        label="评分次数"
        prop="zszs8"/>
      <el-table-column  
        align="center"
        header-align="center"
        label="平均分"
        prop="zszs8"/>
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
        total: 4,
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      getList(index, row) {
        console.log(index, row);
      },
      gos() {
        this.$refs.elimg.clickHandler()
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
    },
  }
</script>