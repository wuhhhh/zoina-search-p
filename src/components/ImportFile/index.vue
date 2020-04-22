<template>
  <el-upload
    class="upload-demo"
    action="/api/importExcel/uploadExcel"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    multiple
    @data="file"
    :limit="3"
    :on-exceed="handleExceed"
    :file-list="fileList"
  >
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>
<script>
export default {
  data() {
    return {
      file:[],
      fileList: [
       
      ]
    };
  },
  methods: {
    //    //图片上传
    // uploadFile({ file: { file } }) {
    //   const formData = new FormData();
    //   const attachment = {

    //   };
    //   formData.append("file", file);
    //   formData.append("sign", this.sign);
    //   formData.append("fileType", "");
    //   formData.append("fileSize", "");
    //   formData.append("folder", "dist");
    //   formData.append("attachment", JSON.stringify(attachment));
    //   uploadFile(formData).then(({ sign, attachmentId }) =>
    //     this.handleAvatarSuccess(attachmentId, sign)
    //   );
    // },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>