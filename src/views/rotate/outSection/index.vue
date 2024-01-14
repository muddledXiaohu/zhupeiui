<template>
  <div class="outSection">
    <TableForm
      @handleQuery="handleQuery"
    />
    <el-row :gutter="20">
      <el-col :span="2">
        <el-button
          icon="el-icon-download"
          size="mini"
          type="primary"
          >导出</el-button
        >
      </el-col>
    </el-row>
    <ItemTable
    />
  </div>
</template>

<script>
  import TableForm from './components/tableForm.vue'
  import ItemTable from './components/itemTable.vue'
  export default {
    name: 'outSection',
    components:{TableForm, ItemTable},
    data() {
      return {
        // 查询参数
        queryParams: {
        },
      }
    },
    methods: {
      handleQuery(e) {
        console.log(e);
      },
    }
  }
</script>

<style lang="scss" scoped>
.outSection {
  padding: 20px;
}
</style>