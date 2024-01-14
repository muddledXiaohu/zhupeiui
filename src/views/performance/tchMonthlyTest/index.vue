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
     @tbEdit="tbEdit"
     @details="details"
     @download="download"
    />
  </div>
</template>

<script>
  import TableForm from './components/tableForm.vue'
  import ItemTable from './components/itemTable.vue'
  export default {
    name: 'tchMonthlyTest',
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
      tbEdit(e) {
        console.log(e);
        this.$router.push({path:'/performance/teachermonthlytestScore', params:{abc:123}})
      },
      details(e) {
        console.log(e);
      },
      download(e) {
        console.log(e);
      },
    }
  }
</script>

<style lang="scss" scoped>
.monthlytest {
  padding: 20px;
}
</style>