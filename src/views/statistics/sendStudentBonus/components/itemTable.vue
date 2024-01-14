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
      label="2019-9"
      prop="name">
      <template slot-scope="scope">
        <p>急诊与重症2</p>
      </template>
    </el-table-column>
    <el-table-column
        align="center"
        header-align="center"
      label="工号"
      prop="name">
      <template slot-scope="scope">
        <p>急诊与重症2</p>
      </template>
    </el-table-column>
    <el-table-column
        align="center"
        header-align="center"
      label="管理单元"
      prop="name">
      <template slot-scope="scope">
        <p>急诊与重症2</p>
      </template>
    </el-table-column>
    <el-table-column
        align="center"
        header-align="center" label="国家">
      <el-table-column  
        align="center"
        header-align="center"
        label="住宿"
        prop="zszs1"/>
      <el-table-column  
        align="center"
        header-align="center"
        label="餐饮"
        prop="zszs2"/>
      <el-table-column  
        align="center"
        header-align="center"
        label="交通"
        prop="zszs3"/>
      <el-table-column  
        align="center"
        header-align="center"
        label="考勤"
        prop="zszs4"/>
    </el-table-column>
      <el-table-column  
        align="center"
        header-align="center"
        label="省级"
        prop="zszs5"/>
      <el-table-column  
        align="center"
        header-align="center"
        label="市级"
        prop="zszs6"/>
      <el-table-column  
        align="center"
        header-align="center"
        label="其他"
        prop="zszs7"/>
      <el-table-column  
        align="center"
        header-align="center"
        label="合计"
        prop="zszs8"/>
      <el-table-column  
        align="center"
        header-align="center"
        label="实发"
        prop="zszs8"/>
      <el-table-column  
        align="center"
        header-align="center"
        label="发放状态"
        prop="zszs9"/>
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
        tableData: [{
          date: '2016-05-02 至 2016-05-02',
          bbb: '儿急症科',
        }, {
          date: '2016-05-02 至 2016-05-04',
          bbb: '儿急症科',
        }],
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