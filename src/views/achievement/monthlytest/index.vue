<template>
  <div class="adminmonthlytest">
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
    name: 'adminmonthlytest',
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
      },
      details(e) {
        console.log(e);
        this.$router.push({name:'Teacherscore', params:{abc:123}})
      },
      download(e) {
        console.log(e);
      },
    }
  }
</script>

<style lang="scss" scoped>
.adminmonthlytest {
  padding: 20px;
}
</style>