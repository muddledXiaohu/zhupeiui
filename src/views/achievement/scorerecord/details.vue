<template>
  <div class="scorerecordDetails">
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
    name:'scorerecordDetails',
    components:{TbDetails},
    methods: {
      goback() {
        this.$router.push({name: 'Scorerecord'})
      }
    },
  }
</script>

<style lang="scss" scoped>

.scorerecordDetails {
  padding: 20px;
}
</style>