<template>
  <div class="adminteachermonthlytestScore">
    <el-row :gutter="20" style="margin-bottom: 15px;">
      <el-col :span="2">
        <el-button
          size="mini"
          @click="goback"
          plain
          >返回</el-button>
      </el-col>
    </el-row>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column align="center" prop="date" label="2023-11-22">
          <template slot-scope="scope">
            <span>
              <p>{{scope.row.name}}</p>
            </span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="a" label="科室" />
        <el-table-column align="center" prop="b" label="工号" />
        <el-table-column align="center" prop="c" label="奖金" />
        <el-table-column align="center" prop="address" label="状态"> </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
  name: "adminteachermonthlytestScore",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          a: 'ICU',
          b: '09233',
          c: '400',
          address: "【发】",
        },
      ],
    };
  },
  mounted() {
    // this.formInline.list = [...this.formInline.list, ...[
    //   {aabb: '', bbb: false},
    //   {aabb: '', bbb: false},
    //   {aabb: '', bbb: false},
    // ]]
  },
  methods: {
    goback() {
      this.$router.push({name: 'Admintchmonthlytest'})
    }
  },
};
</script>

<style lang="scss" scoped>

.adminteachermonthlytestScore {
  padding: 20px;
}
.tabItem {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.formItem {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
