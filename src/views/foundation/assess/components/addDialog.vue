<template>
  <el-dialog
    title="新增考核表"
    :visible.sync="reportVisible"
    width="80%"
    :before-close="opCloseUpload">
    <span>
      <el-form label-position="left" label-width="110px" v-model="formInline" class="demo-form-inline">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="考核表名称">
              <el-input v-model="formInline.user" placeholder="考核表名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="考核表类型">
              <el-select v-model="formInline.region" placeholder="考核表类型">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <isLine />
    </span>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="opCloseUpload">确 定</el-button>
      <el-button @click="opCloseUpload">取 消</el-button>
    </span>
  </el-dialog>
</template>

<script>
import isLine from './line.jsx';
export default {
    components: { isLine },
    props:{
      reportVisible: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        formInline:{}
      }
    },
    methods: {
      opCloseUpload() {
        this.$emit('opCloseUpload')
      },
    },
  }
</script>