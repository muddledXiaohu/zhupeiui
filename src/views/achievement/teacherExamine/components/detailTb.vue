<template>
  <div>
  <el-table
    :data="tableData"
    :header-cell-style="{ background: '#fff', color: '#919191' }"
    stripe
    style="width: 100%;">
    <el-table-column
      label="2023-11"
      prop="speciality">
      <template>
        <p>用户A</p>
      </template>
    </el-table-column>
    <el-table-column>
      <template slot="header" slot-scope="scope">
        <span class="tabItem">
          <p>有无入科报告</p>
          <p>得分</p>
        </span>
      </template>
      <el-table-column
        header-align="center"
        prop="province"
        label="5分"
        width="160"
      >
        <template slot-scope="scope">
          <div class="formItem">
            <span>有</span>
            <span>5分</span>
          </div>
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column
      label="总分"
      prop="date"/>
  </el-table>
  <h4>优秀评分理由</h4>
    <el-table
      :data="reasonData"
      stripe
      style="width: 100%; margin: 15px 0;">
      <el-table-column
        prop="aa"
        label="学员"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="工号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="评分项">
      </el-table-column>
      <el-table-column
        prop="ccc"
        label="理由">
      </el-table-column>
    </el-table>
    <span>修改意见：</span>
    <el-divider></el-divider>
    <span>签字凭证：</span>
    <el-divider></el-divider>
    <span>审核意见：</span>
  </div>
</template>

<script>
  export default {
    name:'TbDetails',
    data() {
      return {
        tableData: [{
          date:'100分'
        }],
        reasonData:[]
      }
    },
  }
</script>

<style lang="scss" scoped>

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