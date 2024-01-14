<template>
  <div class="monthlytest">
    <TableForm
      @handleQuery="handleQuery"
    />
    <el-row :gutter="20">
        <el-col :span="2">
          <el-button icon="el-icon-plus" size="mini" type="primary">考评住陪</el-button>
        </el-col>
    </el-row>
    <ItemTable
     @details="details"
    />
  </div>
</template>

<script>
  import TableForm from './components/tableForm.vue'
  import ItemTable from './components/itemTable.vue'
  export default {
    name: 'admintchmonthlytest',
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
      details(e) {
        console.log(e);
        this.$router.push({name:'AdminteachermonthlytestScore', params:{abc:123}})
      },
    }
  }
</script>

<style lang="scss" scoped>
.monthlytest {
  padding: 20px;
}
</style>