<template>
  <div>
  <el-table
    :data="tableData"
    :header-cell-style="{ background: '#fff', color: '#919191' }"
    stripe
    style="width: 100%; height: calc(100vh - 21.5rem);">
    <el-table-column
      label="姓名"
      prop="name"/>
    <el-table-column
      label="科室"
      prop="bbb"/>
    <el-table-column
      label="工号"
      prop="eeee"/>
    <el-table-column
      label="类型"
      prop="eeee">
      <template slot-scope="scope">
        <span v-if="scope.$index == 1">
          科秘书
        </span>
      </template>
    </el-table-column>
    <el-table-column
      label="是否分配"
      prop="eeee">
      <template slot-scope="scope">
        <span v-if="scope.$index == 1" style="color: rgb(8, 148, 22);">
          已分配
        </span>
        <span v-else>
          未分配
        </span>
      </template>
    </el-table-column>
    <el-table-column
      label="状态"
      prop="eeee">
      <template slot-scope="scope">
        <span v-if="scope.$index == 1" style="color: rgb(8, 148, 22);">
          启用
        </span>
        <span v-else>
          未启用
        </span>
      </template>
    </el-table-column>
    <el-table-column
      label="操作">
      <template>
        <el-button type="text">设定范围</el-button>
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
          eeee: '80012',
          name:'aabb'
        }, {
          date: '2016-05-02 至 2016-05-04',
          bbb: '儿急症科',
          eeee: '00171',
          name:'aabb'
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