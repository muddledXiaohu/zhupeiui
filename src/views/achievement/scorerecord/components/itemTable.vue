<template>
  <div>
  <el-table
    :data="tableData"
    :header-cell-style="{ background: '#fff', color: '#919191' }"
    stripe
    style="width: 100%;">
    <el-table-column
      label="管理单元"
      prop="speciality">
      <template>
        <p>超声医学科</p>
      </template>
    </el-table-column>
    <el-table-column
      label="月度"
      prop="date"/>
    <el-table-column
      label="状态"
      prop="status">
      <template slot-scope="scope">
        <span>
          <p>结业</p>
        </span>
      </template>
    </el-table-column>
    <el-table-column
      width="140"
      label="操作">
      <template>
        <el-button type="text" @click="edit">修改</el-button>
        <el-button type="text" @click="viewDetail">详情</el-button>
        <el-button type="text">提交</el-button>
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
  export default {
    components:{  },
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
      edit() {
        this.$router.push({name: 'ScorerecordAdd'})
      },
      viewDetail() {
        this.$router.push({name: 'ScorerecordDetails'})
      },
      
    },
  }
</script>