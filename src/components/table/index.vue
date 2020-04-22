<template>
  <div>
    <el-table :data="tableData" style="width: 100%" >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="问题名称：">
              <span>{{ props.row.sortName }}</span>
            </el-form-item>
           <el-form-item label="问题原因：">
              <span>{{ props.row.causes }}</span>
            </el-form-item>
            <el-form-item label="问题发起人：">
              <span >{{ props.row.questioner }}</span>
            </el-form-item>
            <el-form-item label="所属战区：">
              <span>{{ props.row.sourceArea }}</span>
            </el-form-item>
            <el-form-item label="问题发起时间：">
              <span>{{ props.row.questionTime }}</span>
            </el-form-item>
             <el-form-item label="问题描述：">
              <span class="span-red-question">{{ props.row.description }}</span>
            </el-form-item>
            <el-form-item label="问题回答：">
              <span class="font-status-bold">{{ props.row.answer }}</span>
            </el-form-item>
            <el-form-item label="解决方案：">
              <span class="font-status-bold">{{ props.row.solution }}</span>
            </el-form-item>
            <el-form-item label="是否解决：">
              <span class="font-status-bold">{{ props.row.solutionStatus }}</span>
            </el-form-item>
            <el-form-item label="后续问题：">
              <span>{{ props.row.followUpQuestion }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="问题ID" prop="id"></el-table-column>
      <el-table-column label="问题名称" prop="sortName"></el-table-column>
      <el-table-column label="问题描述" prop="description" stripe show-overflow-tooltip></el-table-column>
      <el-table-column label="问题发起人" prop="questioner"></el-table-column>
      <el-table-column label="所属战区" prop="sourceArea" stripe show-overflow-tooltip></el-table-column>
      <el-table-column label="问题发起时间" prop="questionTime"></el-table-column>
      <el-table-column label="问题原因" prop="causes"></el-table-column>
    </el-table> 
    <span class="demonstration">每页显示条数</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[30, 50, 100]"
      :page-size="pageSize"
      layout="sizes, prev, pager, next"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "",
          sortName: "",
          description: "",
          questioner: "",
          sourceArea: "",
          questionTime: "",
          causes: "",
          answer: "",
          solution: "",
          solutionStatus: "",
          followUpQuestion: ""
        }
      ],
       currentPage2: 1,
      total:0,
      pageSize:30,
    };
  },
  created() {
    this.loadPage()
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
       this.loadPage(val)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page = val;
      this.loadPage(val)
    },
    loadPage() {
      let page = this.page;
      let pageSize = this.pageSize;
      if(page == '' || page ==undefined){
        page= 1;
      }
      if(pageSize == '' || pageSize ==undefined){
        pageSize= 30;
      }
      this.$axios
        .get("/api/question/queryPageList", {
          params: {
            page: page,
            pageSize: pageSize
          }
        })
        .then(res => {
          //请求成功后的处理函数
          console.log(res.data.data.data);
          this.total = res.data.data.data.total;
          this.pageSize  = res.data.data.data.size;
          this.tableData = res.data.data.data.records;
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
.span-red-question{
  color: red;
}
.font-status-bold{
  font-weight: bold;
  color: black;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>