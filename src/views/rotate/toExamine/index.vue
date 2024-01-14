<template>
  <div class="toExamine">
    <TableForm
      @handleQuery="handleQuery"
      @checkValue1="checkValue1"
    />
    <ItemTable
      :value1="value1"
    />
  </div>
</template>

<script>
  import TableForm from './components/tableForm.vue'
  import ItemTable from './components/itemTable.vue'
  export default {
    name: 'toExamine',
    components:{TableForm, ItemTable},
    data() {
      return {
        // 查询参数
        queryParams: {
        },
        value1: false
      }
    },
    methods: {
      handleQuery(e) {
        console.log(e);
      },
      checkValue1(e) {
        this.value1 = e
      }
    }
  }
</script>

<style lang="scss" scoped>
.toExamine {
  padding: 20px;
}
</style>