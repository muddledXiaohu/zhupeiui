<template>
  <div class="studentBonus">
    <el-row :gutter="20" style="margin-bottom: 15px;">
      <el-col :span="2">
        <el-button
          icon="el-icon-edit"
          size="mini"
          type="primary"
          @click="edit"
          >提交修改</el-button
        >
      </el-col>
    </el-row>
    <isLine />
  </div>
</template>

<script>
  import isLine from './components/line.jsx';
  export default {
    name:'studentBonus',
    components:{isLine},
    methods: {
      edit() {
        this.$alert('是否确认提交修改', '', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `取消修改！`
            });
          }
        });
      }
    },
  }
</script>

<style lang="scss" scoped>
.studentBonus {
  padding: 20px;
}
::v-deep .el-form-item{
  margin: 0;
}
</style>