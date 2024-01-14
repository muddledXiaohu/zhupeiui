<template>
  <div>
    <div v-if="value1">
      <el-table
        :data="tableData1"
        :header-cell-style="{ background: '#fff', color: '#919191' }"
        stripe
        style="width: 100%;">
        <el-table-column
          label="预约场次"
          prop="qweqwe"/>
        <el-table-column
          label="2021-05-11"
          prop="bbb"/>
        <el-table-column
          label="2021-05-11"
          prop="date"/>
        <el-table-column
          label="2021-05-11"
          prop="date"/>
        <el-table-column
          label="2021-05-11"
          prop="date"/>
        <el-table-column
          label="2021-05-11"
          prop="date"/>
      </el-table>
    </div>
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
          label="Speciality"
          prop="speciality">
          <template slot="header" slot-scope="scope">
            <p>专业</p>
            <p>用户类型</p>
          </template>
          <template>
            <p>儿科</p>
            <p>住院医师</p>
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
          label="考核时间"
          prop="date"/>
        <el-table-column
          label="出科考核状态"
          prop="date"/>
        <el-table-column
          label="操作"
          prop="date"/>
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
    props:{
      value1: false
    },
    data() {
      return {
        tableData: [],
        queryParams: {},
        total: 4,
        tableData1: [
          {
            qweqwe: '上午 09:00 - 10:00'
          },
          {
            qweqwe: '上午 10:00 - 11:00'
          },
          {
            qweqwe: '下午 02:00 - 03:00'
          },
        ]
      }
    },
    methods: {
      getList(index, row) {
        console.log(index, row);
      },
    },
  }
</script>