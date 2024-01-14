<template>
  <div class="midtermExamination">
    <TableForm
      @handleQuery="handleQuery"
    />
    <ItemTable
    />
  </div>
</template>

<script>
  import TableForm from './components/tableForm.vue'
  import ItemTable from './components/itemTable.vue'
  export default {
    name: 'midtermExamination',
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
.midtermExamination {
  padding: 20px;
}
</style>