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
    <el-table :data="tableData" style="width: 100%" @cell-dblclick="celldblclick">
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
              <span>{{ props.row.questioner }}</span>
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
      <el-table-column label="问题ID" prop="id" stripe show-overflow-tooltip></el-table-column>
      <el-table-column label="问题名称" prop="sortName" stripe show-overflow-tooltip></el-table-column>
      <el-table-column label="问题描述" prop="description" stripe show-overflow-tooltip></el-table-column>
      <el-table-column label="问题发起人" prop="questioner" stripe show-overflow-tooltip></el-table-column>
      <el-table-column label="所属战区" prop="sourceArea" stripe show-overflow-tooltip></el-table-column>
      <el-table-column label="问题发起时间" prop="questionTime" stripe show-overflow-tooltip></el-table-column>
      <el-table-column label="问题原因" prop="causes" stripe show-overflow-tooltip></el-table-column>
    </el-table>
    <div v-if="pagelation">
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
  </div>
</template>
<script>
export default {
  name: "question",
  components: {},
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
      pagelation: true,
      currentPage2: 1,
      total: 0,
      pageSize: 30,
      search: "",
      selectList: "",
      input1: "",
      input2: "",
      query: {
        match: {}
      },
      match: {
        id: ""
      }
    };
  },
  created() {
    this.loadPage();
  },
  methods: {
    celldblclick(row, column, cell, event) {
      let _this = this;
      this.$copyText(row[column.property]).then(
        function(e) {
          _this.onCopy();
        },
        function(e) {
          _this.onError();
        }
      );
    },
    onCopy(){
      this.$message("复制成功")
    },
    onError(){
      this.$message("复制失败")
    },
    loadPage() {
      let page = this.page;
      let pageSize = this.pageSize;
      if (page == "" || page == undefined) {
        page = 1;
      }
      if (pageSize == "" || pageSize == undefined) {
        pageSize = 30;
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
          this.pageSize = res.data.data.data.size;
          this.tableData = res.data.data.data.records;
        })
        .catch(err => {
          //请求失败后的处理函数
          console.log(err);
        });
    },
    load() {
      this.$message.success("下一页");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.loadPage(val);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page = val;
      this.loadPage(val);
    },
    test() {
      this.match.id = this.search;
      this.query.match = this.match;
      var queryVo1 = {
        idxName: "",
        className: "",
        query: {}
      };
      (queryVo1.idxName = "question"),
        (queryVo1.className = "com.zoina.search.entity.ExcelEntity"),
        (queryVo1.query = this.query);
      var queryVo = JSON.stringify(queryVo1);
      this.$axios
        .post("/api/question/qqqq", {
          queryVo: queryVo,
          page: 1,
          pageSize: 30
        })
        .then(res => {
          //请求成功后的处理函数
          console.log(res);
          this.tableData = res.data.data.records;
          this.pagelation = false;
        })
        .catch(err => {
          //请求失败后的处理函数
          console.log(err);
        });
    },
    queryinfo(data) {
      console.log(data);
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
.span-red-question {
  color: red;
}
.font-status-bold {
  font-weight: bold;
  color: black;
}
</style>
