<template>
  <!-- 授权用户 -->
  <el-dialog :title="diaTitle" :visible.sync="visible" width="65%" top="5vh" append-to-body>
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true">
      <el-form-item label="用户名称" prop="userName">
        <el-input
          v-model="queryParams.userName"
          placeholder="请输入用户名称"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="手机号码" prop="phonenumber">
        <el-input
          v-model="queryParams.phonenumber"
          placeholder="请输入手机号码"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>
    <el-row class="main">
      <!--部门数据-->
      <el-col :span="6" :xs="24" class="itemCol">
          <el-tree
            :data="deptOptions"
            :props="defaultProps"
            :expand-on-click-node="false"
            :filter-node-method="filterNode"
            ref="tree"
            node-key="id"
            default-expand-all
            highlight-current
            @node-click="handleNodeClick"
          />
        </el-col>
      <el-col :span="18" :xs="24">
        <el-table @row-click="clickRow" highlight-current-row ref="table" :data="userList"
          @current-change="handleCurrentChange"
          @cell-dblclick="cellDblclick	"
          height="400">
          <el-table-column type="" width="55">
            <template slot-scope="scope">
              <el-radio v-model="userIds" :label="scope.row.userId"></el-radio>
            </template>
          </el-table-column>
          <el-table-column label="用户名称" prop="userName" :show-overflow-tooltip="true" />
          <el-table-column label="用户昵称" prop="nickName" :show-overflow-tooltip="true" />
          <el-table-column label="邮箱" prop="email" :show-overflow-tooltip="true" />
          <el-table-column label="手机" prop="phonenumber" :show-overflow-tooltip="true" />
          <el-table-column label="状态" align="center" prop="status">
            <template slot-scope="scope">
              <dict-tag :options="dict.type.sys_normal_disable" :value="scope.row.status"/>
            </template>
          </el-table-column>
          <el-table-column label="创建时间" align="center" prop="createTime" width="180">
            <template slot-scope="scope">
              <span>{{ parseTime(scope.row.createTime) }}</span>
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
      </el-col>
    </el-row>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="cellDblclick">确 定</el-button>
      <el-button @click="visible = false">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { listUser, deptTreeSelect } from "@/api/system/user";
export default {
  dicts: ['sys_normal_disable'],
  props: {
    diaTitle: {
      type: String,
      
    }
  },
  data() {
    return {
      // 遮罩层
      visible: false,
      // 选中数组值
      userIds: null,
      // 总条数
      total: 0,
      // 未授权用户数据
      userList: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        roleId: undefined,
        userName: undefined,
        phonenumber: undefined
      },
      // 部门树选项
      deptOptions: [],
      defaultProps: {
        children: "children",
        label: "label"
      },
    };
  },
  methods: {
    // 显示弹框
    show() {
      // this.queryParams.roleId = this.roleId;
      this.getDeptTree()
      this.getList();
      this.visible = true;
    },
    clickRow(row) {
      this.$refs.table.toggleRowSelection(row);
    },
    handleCurrentChange(val) {
      this.userIds = val?.userId||null;
    },
    cellDblclick() {
      this.$emit('ok', this.userIds)
      this.userIds = null
      this.$refs.table.setCurrentRow();
      this.visible = false;
    },
    // 查询表数据
    getList() {
      listUser(this.queryParams).then(res => {
        this.userList = res.rows;
        this.total = res.total;
      });
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    getDeptTree() {
      deptTreeSelect().then(response => {
        this.deptOptions = response.data;
      });
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    handleNodeClick(data) {
      this.queryParams.deptId = data.id;
      this.handleQuery();
    },
  }
};
</script>

<style lang="scss" scoped>
.main {
  height: 55%;
  .itemCol {
    height: 100%;
    overflow-y: auto;
  }
}
</style>
