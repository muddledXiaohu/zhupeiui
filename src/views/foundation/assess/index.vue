<template>
  <div class="assess">
    <el-row :gutter="20" style="margin-bottom: 15px;">
      <el-col :span="2">
        <el-button
          icon="el-icon-plus"
          size="mini"
          type="primary"
          @click="addAssess"
          >新增考核</el-button
        >
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      :header-cell-style="{ background: '#fff', color: '#919191' }"
      height="77vh"
      stripe
      style="width: 100%;">
      <el-table-column
        label="名称"
        prop="name">
        <template>
          <p>学员考核表</p>
        </template>
      </el-table-column>
      <el-table-column
        label="类别"
        prop="bbb">
        <template>
          <p>学员考核表</p>
        </template>
      </el-table-column>
      <el-table-column
        width="220"
        label="操作">
        <template>
          <el-button type="text">修改</el-button>
          <el-button type="text">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />
    <AddDialog
      :reportVisible="reportVisible"
      @opCloseUpload="opCloseUpload"
    />
  </div>
</template>

<script>
  import AddDialog from './components/addDialog.vue';
  export default {
    name: 'assess',
    components: { AddDialog },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          bbb: 'ICU',
          eeee: '测试',
        }, {
          date: '2016-05-02',
          bbb: 'ICU',
          eeee: '测试',
        }],
        queryParams: {},
        total: 4,
        reportVisible: false
      }
    },
    methods: {
      getList(index, row) {
        console.log(index, row);
      },
      addAssess() {
        console.log(123);
        this.reportVisible = true
      },
      opCloseUpload() {
        this.reportVisible = !this.reportVisible
      }
    },
  }
</script>

<style lang="scss" scoped>
.assess {
  padding: 20px;
}
</style>