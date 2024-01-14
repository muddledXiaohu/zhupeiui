<template>
  <div class="teacherExamineDetails">
    <el-row :gutter="20" style="margin-bottom: 15px;">
      <el-col :span="2">
        <el-button
          size="mini"
          @click="goback"
          plain
          >返回</el-button>
      </el-col>
    </el-row>
    <TbDetails
    />
  </div>
</template>

<script>
  import TbDetails from './components/detailTb.vue';
  export default {
    name:'teacherExamineDetails',
    components:{TbDetails},
    methods: {
      goback() {
        this.$router.push({name: 'Teacherexamine'})
      }
    },
  }
</script>

<style lang="scss" scoped>

.teacherExamineDetails {
  padding: 20px;
}
</style>