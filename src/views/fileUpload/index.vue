<template>
  <div>
    <importFile></importFile>
    <search></search>
    <!-- <Table></Table> -->
  </div>
</template>
<script>
import importFile from "@/components/ImportFile/index.vue";
import search from "@/components/search-page/index.vue";
import Table from "@/components/table/index.vue";
export default {
  name: "FileUpload",
  components: {
    importFile,
    search,
    // Table
  },
  data() {
    return {};
  },

  methods: {
    test() {
     this.$axios.get('/api/question/all',{
       params:{
         idxName:'question',
         className:'com.zoina.search.entity.ExcelEntity'
         
       }
     }
      
      )
      .then(res => {                   //请求成功后的处理函数     
      console.log(res);   
    }).catch(err => {                 //请求失败后的处理函数   
      console.log(err)
    })
    }
  }
};
</script>

<style lang="less" scoped>
</style>
