<template>
  <div class="scorerecord">
    <TableForm
      @handleQuery="handleQuery"
    />
    <el-row :gutter="20">
        <el-col :span="2">
          <el-button icon="el-icon-plus" size="mini" type="primary">新增评分</el-button>
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
    name: 'scorerecord',
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
.scorerecord {
  padding: 20px;
}
</style>