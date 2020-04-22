<template>
  <div style="margin-top:2%;margin-left:10%;width:80%">
    <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
      <el-select v-model="selectList" slot="prepend" placeholder="请选择" style="width:120px;">
        <el-option label="招投标管理" value="1"></el-option>
        <el-option label="供应商信息" value="2"></el-option>
        <el-option label="签证变更" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search" @click="test()"></el-button>
    </el-input>
  </div>
</template>
<script>
export default {
  name: "question",
  components: {},
  data() {
    return {
      search: "",
      selectList: "",
      input1: "",
      input2: "",
      query: {
        match:{}
      },
      match: {
        id: ""
      }
    };
  },
  methods: {
    test() {
      this.match.id = this.search;
      this.query.match = this.match; 
      var queryVo1 = {
        idxName : "",
        className: "",
        query:{}
      };
      queryVo1.idxName = "question",
      queryVo1.className = "com.zoina.search.entity.ExcelEntity",
      queryVo1.query = this.query
      var queryVo = JSON.stringify(queryVo1);
      this.$axios
        .post("/api/question/all", {
          queryVo: queryVo,
        })
        .then(res => {
          //请求成功后的处理函数
          console.log(res);
        })
        .catch(err => {
          //请求失败后的处理函数
          console.log(err);
        });
    }
  }
};
</script>

<style  scoped>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
