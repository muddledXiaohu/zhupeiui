<template>
  <div>
  <el-table
    :data="tableData"
    :header-cell-style="{ background: '#fff', color: '#919191' }"
    stripe
    style="width: 100%; height: calc(100vh - 21.5rem);">
    <el-table-column
      label="Name"
      prop="name">
      <template slot="header" slot-scope="scope">
        <p>姓名</p>
        <p>工号</p>
      </template>
      <template>
        <p>小猪</p>
        <p>004903</p>
      </template>
    </el-table-column>
    <el-table-column
      label="Speciality"
      prop="speciality">
      <template slot="header" slot-scope="scope">
        <p>科室</p>
        <p>专业</p>
      </template>
      <template>
        <p>超声医学科</p>
        <p>儿科</p>
      </template>
    </el-table-column>
    <el-table-column
      label="Speciality"
      prop="speciality">
      <template slot="header" slot-scope="scope">
        <p>用户类型</p>
        <p>培养年限</p>
      </template>
      <template>
        <p>住院医师</p>
        <p>三年生</p>
      </template>
    </el-table-column>
    <el-table-column
      label="界别"
      prop="bbb"/>
    <el-table-column
      label="请假天数"
      prop="qjj"/>
    <el-table-column
      label="餐费"
      prop="dddd">
      <template slot-scope="scope">
        <span v-if="scope.$index == 1">
          <span style="color: #288506;">有</span>
          <el-button @click="openSelectUser" type="text">【变更】</el-button>
        </span>
        <span v-else>
          <span style="color: red;">无</span>
          <el-button @click="openSelectUser" type="text">【设置】</el-button>
        </span>
      </template>
    </el-table-column>
    <el-table-column
      label="住宿"
      prop="zszs">
      <template slot-scope="scope">
        <span v-if="scope.$index == 1">
          <span style="color: #288506;">有</span>
        </span>
        <span v-else>
          <span style="color: red;">无</span>
        </span>
      </template>
    </el-table-column>
    <el-table-column
      label="培训状态"
      prop="status">
      <template slot-scope="scope">
        <span v-if="scope.$index == 1">
          <p style="color: #288506; font-weight: 500;">在陪</p>
        </span>
        <p v-else></p>
      </template>
    </el-table-column>
    <el-table-column
      label="上报状态"
      prop="status">
      <template slot-scope="scope">
        <span v-if="scope.$index == 1">
          <p style="color: #288506; font-weight: 500;"> </p>
        </span>
        <p v-else></p>
      </template>
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button type="text" @click="edit(scope.row)">修改</el-button>
        <el-button style="color: red;" type="text">删除</el-button>
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
    <DetailEdit ref="detailEdit" />
  </div>
</template>

<script>
import SelectUser from '@/components/huComt/selectUser.vue'
  import DetailEdit from './details.vue'
  import {getStudentList} from '@/api/personnel/student';
  export default {
    components:{ SelectUser, DetailEdit },
    data() {
      return {
        tableData: [{
          date: '2016-05-02 至 2016-05-02',
          bbb: '2019',
          qjj: '1',
        }, {
          date: '2016-05-02 至 2016-05-04',
          bbb: '2023',
          qjj: '0',
        }],
        search: '',
        queryParams: {
          pageNum:1,
          pageSize:10
        },
        total: 4,
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        ],
        reportVisible: false
      }
    },
    created() {
      this.init();
    },
    methods: {
      async init() {
        const data = await getStudentList(this.queryParams)
        console.log(data);
      },
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
      edit(item) {
        console.log(item);
        this.$refs.detailEdit.openDialog()
      }
    },
  }
</script>