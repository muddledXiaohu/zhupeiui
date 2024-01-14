<template>
  <el-dialog
    title="修改住培生"
    :visible.sync="dialogVisible"
    width="70%"
    :show-close="false"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    :before-close="handleClose">
    <span>
      <el-form label-width="80px" :model="formInline">
        <el-row :gutter="20" style="margin-bottom: 15px;">
          <el-col :span="6">
            <el-form-item label="审批人">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="活动区域">
              <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        formInline: {
          
        }
      }
    },
    methods: {
      openDialog() {
        this.dialogVisible = true
      },
      handleClose() {
        this.dialogVisible = false
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>