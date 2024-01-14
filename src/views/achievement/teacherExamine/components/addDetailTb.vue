<template>
  <div>
    <el-form v-model="formInline.list" class="demo-form-inline">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="2023-11-22" width="200">
          <template slot-scope="scope">
            <span>
              <p>叶丹尼（P17008）</p>
              <p>儿童保健科</p>
            </span>
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
            width="200"
          >
            <template slot-scope="scope">
              <div class="formItem">
                <el-form-item
                  style="width: 50%; text-align: center"
                  :prop="formInline.list[scope.$index].titleaabb"
                  v-if="
                    formInline.list[scope.$index] &&
                    formInline.list[scope.$index].bbb
                  "
                >
                  <el-switch v-model="formInline.list[scope.$index].aabb">
                  </el-switch>
                </el-form-item>
                <el-form-item
                  style="width: 45%"
                  :prop="formInline.list[scope.$index].cccc"
                  v-if="
                    formInline.list[scope.$index] &&
                    formInline.list[scope.$index].bbb
                  "
                >
                  <el-input
                    v-model="formInline.list[scope.$index].cccc"
                    maxlength="200"
                  >
                  </el-input>
                </el-form-item>
              </div>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column
            align="center" prop="address" label="总分"> </el-table-column>
      </el-table>
    </el-form>
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
      formInline: {
        list: [
          { aabb: true, titleaabb: "aabb", dddd:'',titledddd:'dddd', bbb: true },
        ],
      },
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