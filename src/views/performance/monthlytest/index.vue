<template>
  <div class="monthlytest">
    <TableForm
      @handleQuery="handleQuery"
    />
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
    name: 'monthlytest',
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
        this.$router.push({path:'/performance/monthlytestScore', params:{abc:123}})
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