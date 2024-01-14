<template>
  <div class="itemTable">
  <el-table
    :data="tableData"
    :header-cell-style="{ background: '#fff', color: '#919191' }"
    stripe
    style="width: 100%; height: calc(100vh - 21.5rem);">
    <el-table-column
      label="管理单元"
      prop="name">
      <template>
        <p>儿童医院</p>
      </template>
    </el-table-column>
    <el-table-column
      label="月度"
      prop="date"/>
    <el-table-column
      label="附件"
      prop="eeee">
      <template slot-scope="scope">
        <span v-if="scope.$index == 1" class="voucher">
        <el-image
          ref="elimg"
          :preview-src-list="srcList">
          <template slot="error">
            <el-button type="text" @click="gos">查看</el-button>
          </template>
        </el-image>
          <p type="text">2016-05-02</p>
        </span>
        <span v-else>
          <span>无</span>
          <el-button type="text" @click="opCloseUpload">【上传】</el-button>
        </span>
      </template>
    </el-table-column>
    <el-table-column
      label="状态"
      prop="status">
      <template slot-scope="scope">
        <span class="itemstatus" v-if="scope.$index == 1">
          <p>未发放</p>
            <el-button type="text">【发放】</el-button>
        </span>
        <span class="itemstatus" v-else>
          <p>未发放</p>
            <el-button type="text">【发放】</el-button>
        </span>
      </template>
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <span>
            <el-button @click="father(scope.row, 'details')" type="text">详情</el-button>
        </span>
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
    <select-user ref="select" diaTitle="选择带教老师" @ok="getuser" />
    <el-dialog
      title="上传报道通知单"
      :visible.sync="reportVisible"
      width="30%"
      :before-close="opCloseUpload">
      <span>
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :limit="1"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="opCloseUpload">确 定</el-button>
        <el-button @click="opCloseUpload">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import SelectUser from '@/components/huComt/selectUser.vue'
  export default {
    components:{ SelectUser },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          bbb: '儿急症科',
        }, {
          date: '2016-05-02',
          bbb: '儿急症科',
        }],
        search: '',
        queryParams: {},
        total: 4,
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        ],
        reportVisible: false
      }
    },
    methods: {
      openSelectUser() {
        this.$refs.select.show();
      },
      getList(index, row) {
        console.log(index, row);
      },
      getuser(e) {
        console.log(e);
      },
      gos() {
        this.$refs.elimg.clickHandler()
      },
      opCloseUpload() {
        this.reportVisible = !this.reportVisible
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      father(row, edit) {
        this.$emit(edit, row)
      },
    },
  }
</script>

<style lang="scss" scoped>
.itemTable {
  margin-top: .9375rem;
}
.voucher {
  line-height: 13px;
  .el-button {
    padding: 0;
  }
}
.itemstatus {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>