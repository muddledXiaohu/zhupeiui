<template>
  <div class="teacherscore">
    <el-row :gutter="20" style="margin-bottom: 15px;">
      <el-col :span="2">
        <el-button
          size="mini"
          @click="goback"
          plain
          >返回</el-button>
      </el-col>
    </el-row>
    <el-form v-model="formInline.list" class="demo-form-inline">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="2023-11-22" width="180">
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
            width="160"
          >
            <template slot-scope="scope">
              <div class="formItem">
                <el-form-item
                  style="width: 45%; text-align: center"
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
                  style="width: 49%"
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
        <el-table-column>
          <template slot="header" slot-scope="scope">
            <span class="tabItem">
              <p>理论月考成绩</p>
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
                <el-form-item
                  style="width: 45%; text-align: center"
                  :prop="formInline.list[scope.$index].titledddd"
                  v-if="
                    formInline.list[scope.$index] &&
                    formInline.list[scope.$index].bbb
                  "
                >
                  <el-input
                    v-model="formInline.list[scope.$index].dddd"
                    maxlength="200"
                  />
                </el-form-item>
                <el-form-item
                  style="width: 49%"
                  :prop="formInline.list[scope.$index].cccc"
                  v-if="
                    formInline.list[scope.$index] &&
                    formInline.list[scope.$index].bbb
                  "
                >
                  <el-input
                    v-model="formInline.list[scope.$index].cccc"
                    maxlength="200"
                  />
                </el-form-item>
              </div>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column>
          <template slot="header" slot-scope="scope">
            <span class="tabItem">
              <p>技能出科考试成绩</p>
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
                <el-form-item
                  style="width: 45%; text-align: center"
                  :prop="formInline.list[scope.$index].titledddd"
                  v-if="
                    formInline.list[scope.$index] &&
                    formInline.list[scope.$index].bbb
                  "
                >
                  <el-input
                    v-model="formInline.list[scope.$index].dddd"
                    maxlength="200"
                  />
                </el-form-item>
                <el-form-item
                  style="width: 49%"
                  :prop="formInline.list[scope.$index].cccc"
                  v-if="
                    formInline.list[scope.$index] &&
                    formInline.list[scope.$index].bbb
                  "
                >
                  <el-input
                    v-model="formInline.list[scope.$index].cccc"
                    maxlength="200"
                  />
                </el-form-item>
              </div>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column>
          <template slot="header" slot-scope="scope">
            <span class="tabItem">
              <p>参加小讲座次数</p>
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
                <el-form-item
                  style="width: 45%; text-align: center"
                  :prop="formInline.list[scope.$index].titledddd"
                  v-if="
                    formInline.list[scope.$index] &&
                    formInline.list[scope.$index].bbb
                  "
                >
                  <el-input
                    v-model="formInline.list[scope.$index].dddd"
                    maxlength="200"
                  />
                </el-form-item>
                <el-form-item
                  style="width: 49%"
                  :prop="formInline.list[scope.$index].cccc"
                  v-if="
                    formInline.list[scope.$index] &&
                    formInline.list[scope.$index].bbb
                  "
                >
                  <el-input
                    v-model="formInline.list[scope.$index].cccc"
                    maxlength="200"
                  />
                </el-form-item>
              </div>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column>
          <template slot="header" slot-scope="scope">
            <span class="tabItem">
              <p>参加教学查房次数</p>
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
                <el-form-item
                  style="width: 45%; text-align: center"
                  :prop="formInline.list[scope.$index].titledddd"
                  v-if="
                    formInline.list[scope.$index] &&
                    formInline.list[scope.$index].bbb
                  "
                >
                  <el-input
                    v-model="formInline.list[scope.$index].dddd"
                    maxlength="200"
                  />
                </el-form-item>
                <el-form-item
                  style="width: 49%"
                  :prop="formInline.list[scope.$index].cccc"
                  v-if="
                    formInline.list[scope.$index] &&
                    formInline.list[scope.$index].bbb
                  "
                >
                  <el-input
                    v-model="formInline.list[scope.$index].cccc"
                    maxlength="200"
                  />
                </el-form-item>
              </div>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column>
          <template slot="header" slot-scope="scope">
            <span class="tabItem">
              <p>参加疑难病例讨论次数</p>
              <p>得分</p>
            </span>
          </template>
          <el-table-column
            header-align="center"
            prop="province"
            label="5分"
            width="180"
          >
            <template slot-scope="scope">
              <div class="formItem">
                <el-form-item
                  style="width: 45%; text-align: center"
                  :prop="formInline.list[scope.$index].titledddd"
                  v-if="
                    formInline.list[scope.$index] &&
                    formInline.list[scope.$index].bbb
                  "
                >
                  <el-input
                    v-model="formInline.list[scope.$index].dddd"
                    maxlength="200"
                  />
                </el-form-item>
                <el-form-item
                  style="width: 49%"
                  :prop="formInline.list[scope.$index].cccc"
                  v-if="
                    formInline.list[scope.$index] &&
                    formInline.list[scope.$index].bbb
                  "
                >
                  <el-input
                    v-model="formInline.list[scope.$index].cccc"
                    maxlength="200"
                  />
                </el-form-item>
              </div>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column>
          <template slot="header" slot-scope="scope">
            <span class="tabItem">
              <p>书写大病历份次数及质量</p>
              <p>得分</p>
            </span>
          </template>
          <el-table-column
            header-align="center"
            prop="province"
            label="5分"
            width="195"
          >
            <template slot-scope="scope">
              <div class="formItem">
                <el-form-item
                  style="width: 45%; text-align: center"
                  :prop="formInline.list[scope.$index].titledddd"
                  v-if="
                    formInline.list[scope.$index] &&
                    formInline.list[scope.$index].bbb
                  "
                >
                  <el-input
                    v-model="formInline.list[scope.$index].dddd"
                    maxlength="200"
                  />
                </el-form-item>
                <el-form-item
                  style="width: 49%"
                  :prop="formInline.list[scope.$index].cccc"
                  v-if="
                    formInline.list[scope.$index] &&
                    formInline.list[scope.$index].bbb
                  "
                >
                  <el-input
                    v-model="formInline.list[scope.$index].cccc"
                    maxlength="200"
                  />
                </el-form-item>
              </div>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column>
          <template slot="header" slot-scope="scope">
            <span class="tabItem">
              <p>读书心得质量</p>
              <p>得分</p>
            </span>
          </template>
          <el-table-column
            header-align="center"
            prop="province"
            label="5分"
            width="180"
          >
            <template slot-scope="scope">
              <div class="formItem">
                <el-form-item
                  style="width: 45%; text-align: center"
                  :prop="formInline.list[scope.$index].titledddd"
                  v-if="
                    formInline.list[scope.$index] &&
                    formInline.list[scope.$index].bbb
                  "
                >
                  <el-input
                    v-model="formInline.list[scope.$index].dddd"
                    maxlength="200"
                  />
                </el-form-item>
                <el-form-item
                  style="width: 49%"
                  :prop="formInline.list[scope.$index].cccc"
                  v-if="
                    formInline.list[scope.$index] &&
                    formInline.list[scope.$index].bbb
                  "
                >
                  <el-input
                    v-model="formInline.list[scope.$index].cccc"
                    maxlength="200"
                  />
                </el-form-item>
              </div>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column>
          <template slot="header" slot-scope="scope">
            <span class="tabItem">
              <p>APP填写完成率</p>
              <p>得分</p>
            </span>
          </template>
          <el-table-column
            header-align="center"
            prop="province"
            label="5分"
            width="180"
          >
            <template slot-scope="scope">
              <div class="formItem">
                <el-form-item
                  style="width: 45%; text-align: center"
                  :prop="formInline.list[scope.$index].titledddd"
                  v-if="
                    formInline.list[scope.$index] &&
                    formInline.list[scope.$index].bbb
                  "
                >
                  <el-input
                    v-model="formInline.list[scope.$index].dddd"
                    maxlength="200"
                  />
                </el-form-item>
                <el-form-item
                  style="width: 49%"
                  :prop="formInline.list[scope.$index].cccc"
                  v-if="
                    formInline.list[scope.$index] &&
                    formInline.list[scope.$index].bbb
                  "
                >
                  <el-input
                    v-model="formInline.list[scope.$index].cccc"
                    maxlength="200"
                  />
                </el-form-item>
              </div>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column>
          <template slot="header" slot-scope="scope">
            <span class="tabItem">
              <p>各级反馈意见</p>
              <p>得分</p>
            </span>
          </template>
          <el-table-column
            header-align="center"
            prop="province"
            label="5分"
            width="130"
          >
            <template slot-scope="scope">
              <div class="formItem">
                <el-form-item
                  style="width: 45%; text-align: center"
                  :prop="formInline.list[scope.$index].titledddd"
                  v-if="
                    formInline.list[scope.$index] &&
                    formInline.list[scope.$index].bbb
                  "
                >
                  <el-input
                    v-model="formInline.list[scope.$index].dddd"
                    maxlength="200"
                  />
                </el-form-item>
                <el-form-item
                  style="width: 49%"
                  :prop="formInline.list[scope.$index].cccc"
                  v-if="
                    formInline.list[scope.$index] &&
                    formInline.list[scope.$index].bbb
                  "
                >
                  <el-input
                    v-model="formInline.list[scope.$index].cccc"
                    maxlength="200"
                  />
                </el-form-item>
              </div>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column
            align="center" prop="address" label="状态"> </el-table-column>
      </el-table>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "teacherscore",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "【发】",
        },
      ],
      formInline: {
        list: [
          { aabb: true, titleaabb: "aabb", dddd:'',titledddd:'dddd', bbb: true },
        ],
      },
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
        this.$router.push({name: 'Adminmonthlytest'})
      }
  },
};
</script>

<style lang="scss" scoped>
.teacherscore {
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
