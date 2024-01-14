<template>
  <div class="teacherexamineAdd">
    <el-row :gutter="20" style="margin-bottom: 15px;">
      <el-col :span="2">
        <el-button
          size="mini"
          @click="goback"
          plain
          >返回</el-button>
      </el-col>
    </el-row>
    <AddDetailTb
    />
  </div>
</template>

<script>
  import AddDetailTb from './components/addDetailTb.vue';
  export default {
    name:'teacherexamineAdd',
    components:{AddDetailTb},
    methods: {
      goback() {
        this.$router.push({name: 'Teacherexamine'})
      }
    },
  }
</script>

<style lang="scss" scoped>

.teacherexamineAdd {
  padding: 20px;
}
</style>