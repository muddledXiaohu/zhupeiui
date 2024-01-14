<template>
  <div>
  <el-table
    :data="tableData"
    :header-cell-style="{ background: '#fff', color: '#919191' }"
    stripe
    height="74vh"
    style="width: 100%;">
    <el-table-column
      label="管理单元"
      prop="name">
      <template  slot-scope="scope">
        <p :style="scope.$index == 0 ? 'padding: 30px 0':''">{{ `` }}</p>
      </template>
    </el-table-column>
    <el-table-column
      label="月度"
      prop="name">
      <template  slot-scope="scope">
        <p :style="scope.$index == 0 ? 'padding: 30px 0':''">{{ `` }}</p>
      </template>
    </el-table-column>
    <el-table-column
      label="操作">
      <template  slot-scope="scope">
        <span>123</span>
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