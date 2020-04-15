<template>
 
      <div style="margin-top:2%;margin-left:10%;width:80%">
        <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
          <el-select v-model="selectList" slot="prepend" placeholder="请选择" style="width:120px;">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
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
       input1: '',
      input2: '',
    };
  },

  methods: {}
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
