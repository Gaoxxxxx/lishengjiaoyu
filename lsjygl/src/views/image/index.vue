<template>
    <div class="container">
        <!-- 轮播图 -->
        <div>
            <h1 style="margin-top:50px">轮播图</h1>
            <el-table
            :data="tableData"
            style="width: 100%;margin:50px auto"
            >
                <el-table-column
                prop="imageId"
                label="图片编号"
                width="300">
                </el-table-column>
                <el-table-column
                prop="imageTitle"
                label="图片名称"
                width="300">
                </el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                width="180">
                <template slot-scope="scope">
                    <el-button
                    type="text"
                    size="small"
                    @click= handelDelete(scope.$index)
                    >
                    移除
                    </el-button>
                </template>
                </el-table-column>
            </el-table>
            <el-button type="primary" plain style="width:100%" @click= add>添加轮播图</el-button>
        </div>
        <!-- 展示 -->
        <div>
            <h1 style="margin-top:50px">教学展示</h1>
            <el-table
            :data="tableData"
            style="width: 100%;margin:50px auto"
            >
                <el-table-column
                prop="imageId"
                label="图片编号"
                width="300">
                </el-table-column>
                <el-table-column
                prop="imageTitle"
                label="图片名称"
                width="300">
                </el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                width="180">
                <template slot-scope="scope">
                    <el-button
                    type="text"
                    size="small"
                    @click= handelDelete(scope.$index)
                    >
                    移除
                    </el-button>
                </template>
                </el-table-column>
            </el-table>
            <el-button type="primary" plain style="width:100%" @click= add>添加教学展示</el-button>
        </div>
        <!-- 弹出框 -->
        <el-dialog
        :title="diatitle" 
        :visible.sync="flag"
        width="40%"
        :before-close="close">
        <!-- action为上传地址 -->
            <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture"
            limit:1	>
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <span slot="footer" class="dialog-footer">
        <el-button @click= close>取 消</el-button>
        <el-button type="primary" @click= close>确 定</el-button>
        </span>
        </el-dialog>
    
    </div>
</template>
<script>
export default {
    data() {
        return {
            fileList:[],
            diatitle:'',
            flag:false,
            tableData:[
                {
                    imageId:1,
                    imageTitle:'123456789'
                },
                {
                    imageId:2,
                    imageTitle:'734'
                },
                {
                    imageId:3,
                    imageTitle:'9836542'
                },
                {
                    imageId:4,
                    imageTitle:'3402'
                },
            ],
        }

    },
    methods: {
        //删除点击事件
        handelDelete(index){
          this.$confirm('确认删除？')
            .then(_ => {
          //前端删除
          // console.log(index);
          let arr = [...this.tableData];
          arr.splice(index,1);
          this.tableData = arr;
          //数据库删除
          /*axios
          .get('删除接口'){}
          .then(response => (this.info = response)){
            返回数据
          }
          .catch(function (error) { // 请求失败处理
            console.log(error);
          });};*/
          })
            .catch(_ => {});
        },
        add(){
            console.log('123');
            this.flag=true;
        },
        close(){
            this.flag=false;
        },
        handleRemove(file, fileList) {
        console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },

    },
}
</script>
<style lang="scss" scoped>
    .container{
        width: 60%;
      margin: 60px auto;
    }
  </style>