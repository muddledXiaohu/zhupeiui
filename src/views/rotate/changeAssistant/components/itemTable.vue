<template>
  <div>
      <el-table
        :data="tableData"
        :header-cell-style="{ background: '#fff', color: '#919191' }"
        stripe
        style="width: 100%; height: calc(100vh - 21.5rem);">
        <el-table-column
          label="Name"
          prop="name">
          <template slot="header" slot-scope="scope">
            <p>姓名</p>
            <p>工号</p>
          </template>
          <template>
            <p>小猪</p>
            <p>004903</p>
          </template>
        </el-table-column>
        <el-table-column
          label="管理单元"
          prop="bbb"/>
        <el-table-column
          label="轮转科室"
          prop="bbb"/>
        <el-table-column
          label="轮转时间"
          prop="date"/>
        <el-table-column
          label="带教老师"
          prop="speciality">
          <template>
            <p>王凌</p>
            <el-button type="text">变更</el-button>
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
    components:{},
    data() {
      return {
        tableData: [],
        queryParams: {},
        total: 4,
      }
    },
    methods: {
      getList(index, row) {
        console.log(index, row);
      },
    },
  }
</script>