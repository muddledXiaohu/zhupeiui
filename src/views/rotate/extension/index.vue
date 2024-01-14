<template>
  <div class="extension">
    <el-table
        :data="tableData"
        :header-cell-style="{ background: '#fff', color: '#919191' }"
        stripe
        style="width: 100%;">
        <el-table-column
          label="姓名"
          prop="bbb"/>
        <el-table-column
          label="工号"
          prop="bbb"/>
        <el-table-column
          label="科室"
          prop="date"/>
        <el-table-column
          label="延期月份"
          prop="date"/>
        <el-table-column
          label="延期原因"
          prop="date"/>
        <el-table-column
          label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            v-hasPermi="['monitor:job:edit']"
          >审核</el-button>
        </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
  export default {
    name: 'extension',
    data() {
      return {
        tableData: [],
      }
    },
  }
</script>

<style lang="scss" scoped>
.extension {
  padding: 20px;
}
</style>