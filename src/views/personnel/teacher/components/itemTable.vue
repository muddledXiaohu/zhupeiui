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
      label="科室"
      prop="bbb"/>
    <el-table-column
      label="学历"
      prop="eeee"/>
    <el-table-column
      label="Speciality"
      prop="speciality">
      <template slot="header" slot-scope="scope">
        <p>现带教人数</p>
        <p>总带教人数</p>
      </template>
      <template>
        <p>1</p>
        <p>3</p>
      </template>
    </el-table-column>
    <el-table-column
      label="最高分"
      prop="ff1"/>
    <el-table-column
      label="最底分"
      prop="ff2"/>
    <el-table-column
      label="Speciality"
      prop="speciality">
      <template slot="header" slot-scope="scope">
        <p>平均分</p>
        <p>评分次数</p>
      </template>
      <template>
        <p>0</p>
        <p>0</p>
      </template>
    </el-table-column>
    <el-table-column
      label="带教资质"
      prop="eeee">
      <template slot-scope="scope">
        <span v-if="scope.$index == 1" style="display: flex;">
        <el-image
          ref="elimg"
          :preview-src-list="srcList">
          <template slot="error">
            <el-button type="text" @click="gos">查看</el-button>
          </template>
        </el-image>
          <el-button type="text" @click="opCloseUpload">【变更】</el-button>
        </span>
        <span v-else>
          <span style="color: red;">无</span>
          <el-button type="text" @click="opCloseUpload">【上传】</el-button>
        </span>
      </template>
    </el-table-column>
    <el-table-column
      label="操作">
      <template>
        <el-button type="text">评分详情</el-button>
        <el-button type="text">修改</el-button>
        <el-button type="text" style="color: red;">删除</el-button>
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
      title="上传资质"
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
          eeee: '大专'
        }, {
          date: '2016-05-02 至 2016-05-04',
          bbb: '儿急症科',
          eeee: '研究生'
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