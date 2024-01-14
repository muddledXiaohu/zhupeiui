<template>
  <el-form :model="queryParams"
    label-position="left"
    ref="queryForm" size="small" label-width="68px">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-form-item label="管理单元" prop="ddd">
          <el-select v-model="queryParams.ddd" placeholder="请选择管理单元">
            <el-option
              v-for="item in unitSelectList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="考核月份" prop="value3">
          <el-date-picker
            v-model="queryParams.value3"
            type="month"
            placeholder="选择月">
          </el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="发放状态" prop="cc">
          <el-select v-model="queryParams.cc" placeholder="请选择发放状态">
            <el-option
              v-for="item in unitSelectList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label-width="18px">
          <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
          <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { unitSelectList } from '../data';
  export default {
    data() {
      return {
        unitSelectList,
        queryParams: {}
      }
    },
    methods: {
      handleQuery() {
        this.queryParams.pageNum = 1;
        this.$emit('handleQuery', this.queryParams)
      },
      resetQuery() {
        this.resetForm("queryForm");
        this.handleQuery();
      },
    }
  }
</script>

<style lang="scss" scoped>

::v-deep.el-date-editor.el-input, .el-date-editor.el-input__inner {
  width: 100%;
}
</style>