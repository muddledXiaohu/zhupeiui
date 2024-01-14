<template>
  <div class="department">
    <TableForm @handleQuery="handleQuery" />
    <el-row :gutter="20">
      <el-col :span="2">
        <el-button
          :disabled="selectedList.length <= 0"
          icon="el-icon-printer"
          size="mini"
          type="primary"
          @click="printNotice"
          >生成报道通知单</el-button
        >
      </el-col>
    </el-row>
    <ItemTable @handleSelectionChange="tbHandleSelection" />
    <el-dialog
      title="报道通知单"
      :visible.sync="dialogVisible"
      width="80%"
      :before-close="dialogClose">
      <span>
        <div id="printContent">
          <div class="printItem">
            <div class="department">
              <h3>住院医师报道通知单（交科室）</h3>
              <p><span class="spanUnder">ICU</span>科室</p>
              <p style="text-indent: 2em;">
                <span class="spanUnder">2023</span>
                届住院医师
                <span class="spanUnder">胡图图</span>,
                于
                <span class="spanUnder">2023</span>年
                <span class="spanUnder">6</span>月
                <span class="spanUnder">6</span>日至
                <span class="spanUnder">2023</span>年
                <span class="spanUnder">8</span>月
                <span class="spanUnder">6</span>日
                来你科室轮转,请予以认真带教。
              </p>
              <div class="information">
                <p>教育科签名:<span class="spanUnder">室长aabb</span></p>
                <p>东南大学附属中医院</p>
                <p>2023年05月11日</p>
              </div>
            </div>
            <div class="department" style="width: 60%;">
              <h3>住院医师报道通知单（交教育科）</h3>
              <p><span class="spanUnder">ICU</span>科室</p>
              <p style="text-indent: 2em;">
                <span class="spanUnder">2023</span>
                届住院医师
                <span class="spanUnder">胡图图</span>,
                于
                <span class="spanUnder">2023</span>年
                <span class="spanUnder">6</span>月
                <span class="spanUnder">6</span>日至
                <span class="spanUnder">2023</span>年
                <span class="spanUnder">8</span>月
                <span class="spanUnder">6</span>日
                来你科室轮转,请予以认真带教。
              </p>
              <div class="authentication">
                <p>基地主任：<span></span></p>
                <p>基地秘书：<span></span></p>
                <p>带教老师：<span></span></p>
              </div>
              <div class="information">
                <p>东南大学附属中医院</p>
                <p>2023年05月11日</p>
              </div>
            </div>
          </div>
        </div>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogClose">关 闭</el-button>
        <el-button type="primary" v-print="printContent">打 印</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import TableForm from "./components/tableForm.vue";
import ItemTable from "./components/itemTable.vue";
export default {
  name: "department",
  components: { TableForm, ItemTable },
  data() {
    return {
      // 查询参数
      queryParams: {},
      selectedList: [],
      dialogVisible: false,
      printContent: {
        id: "printContent", // 打印的区域
        preview: false, // 预览工具是否启用
        previewTitle: "报道通知单", // 预览页面的标题
        popTitle: "", // 打印页面的页眉
        previewBeforeOpenCallback() {
          console.log("正在加载预览窗口");
        },
        previewOpenCallback() {
          console.log("已经加载完预览窗口");
        },
        beforeOpenCallback(vue) {
          vue.printLoading = true;
          console.log("打开之前");
        },
        openCallback(vue) {
          vue.printLoading = false;
          console.log("执行了打印");
        },
        closeCallback() {
          console.log("关闭了打印工具");
        },
        clickMounted(vue) {
          console.log("点击了打印按钮");
        },
      },
    };
  },
  methods: {
    handleQuery(e) {
      console.log(e);
    },
    tbHandleSelection(e) {
      this.selectedList = e;
    },
    printNotice() {
      console.log(123);
      this.dialogVisible = true
    },
    dialogClose() {
      this.dialogVisible = false
    }
  },
};
</script>

<style lang="scss" scoped>
.department {
  padding: 20px;
}
.printItem {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .department {
    width: 35%;
    border: 1px solid #000;
    font-weight: 500;
    h3 {
      padding: 0;
      margin: 0;
      font-weight: 700;
      font-size: 20px;
      text-align: center;
    }
    .spanUnder {
      text-decoration: underline;
      padding: 0 5px;
    }
    .authentication {
      padding-top: 20px;
      text-indent: 2em;
      display: flex;
      span{
        width: 4rem;
        display: inline-block;
        padding-right: 5px;
        border-bottom: 2px solid #000;
      }
    }
    .information {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      p {
        padding: 5px 0;
      }
    }
  }
}
</style>
