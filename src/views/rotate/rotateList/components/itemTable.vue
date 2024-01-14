<template>
  <div>
  <el-table
    :data="tableData"
    :header-cell-style="{ background: '#fff', color: '#919191' }"
    stripe
    style="width: 100%; height: calc(100vh - 21.5rem);">
    <el-table-column
      label="2019-9"
      prop="name">
      <template  slot-scope="scope">
        <p :style="scope.$index == 0 ? 'padding: 30px 0':''">急诊与重症2</p>
      </template>
    </el-table-column>
    <el-table-column
      label="2019-10"
      prop="name">
      <template  slot-scope="scope">
        <p :style="scope.$index == 0 ? 'padding: 30px 0':''">急诊与重症2</p>
      </template>
    </el-table-column>
    <el-table-column
      label="2019-11"
      prop="name">
      <template  slot-scope="scope">
        <p :style="scope.$index == 0 ? 'padding: 30px 0':''">急诊与重症2</p>
      </template>
    </el-table-column>
    <el-table-column
      label="2019-12"
      prop="name">
      <template  slot-scope="scope">
        <p :style="scope.$index == 0 ? 'padding: 30px 0':''">急诊与重症2</p>
      </template>
    </el-table-column>
    <el-table-column
      label="2020-1"
      prop="name">
      <template  slot-scope="scope">
        <p :style="scope.$index == 0 ? 'padding: 30px 0':''">急诊与重症2</p>
      </template>
    </el-table-column>
    <el-table-column
      label="2020-2"
      prop="name">
      <template  slot-scope="scope">
        <p :style="scope.$index == 0 ? 'padding: 30px 0':''">急诊与重症2</p>
      </template>
    </el-table-column>
    <el-table-column
      label="2020-3"
      prop="name">
      <template  slot-scope="scope">
        <p :style="scope.$index == 0 ? 'padding: 30px 0':''">急诊与重症2</p>
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
          date: '2016-05-02 至 2016-05-02',
          bbb: '儿急症科',
        }, {
          date: '2016-05-02 至 2016-05-04',
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
      handleEdit(index, row) {
        console.log(index, row);
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
    },
  }
</script>