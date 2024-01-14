<template>
  <div class="studentBonus">
    <TableForm @handleQuery="handleQuery" />
    <el-row :gutter="20" style="margin-bottom: 15px;">
      <el-col :span="1.5">
        <el-button icon="el-icon-download" size="mini" type="primary"
          >导出</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button icon="el-icon-download" size="mini" type="primary"
          >财务导出</el-button>
      </el-col>
    </el-row>
    <ItemTable />
  </div>
</template>

<script>
import TableForm from "./components/tableForm.vue";
import ItemTable from "./components/itemTable.vue";
export default {
  name: "studentBonus",
  components: { TableForm, ItemTable },
  data() {
    return {
      // 查询参数
      queryParams: {},
    };
  },
  methods: {
    handleQuery(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
.studentBonus {
  padding: 20px;
}
</style>
