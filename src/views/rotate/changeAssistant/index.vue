<template>
  <div class="changeAssistant">
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
    name: 'changeAssistant',
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
.changeAssistant {
  padding: 20px;
}
</style>