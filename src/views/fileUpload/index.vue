<template>
  <div>
    
    <importFile></importFile>
    <search></search>
  
  </div>
</template>
<script>
import importFile from "@/components/ImportFile/index.vue";
import search from "@/components/search-page/index.vue";
export default {
  name: "FileUpload",
  components: {
    importFile,
    search
  },
  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="less" scoped>
</style>
