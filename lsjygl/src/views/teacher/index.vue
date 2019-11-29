  <template>
  <div class="container">
    <el-table
    :data="tableData"
    style="width: 100%;margin:50px auto">
      <el-table-column
        prop="tId"
        label="教师编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="intro"
        label="介绍">
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="120">
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
    <el-button type="primary" plain style="width:100%" @click= handelAdd()>添加教师</el-button>
    <teacher-dialog 
    :flag = "dialogVisible"
    :diatitle = "editTitle"
     @childFn="parentFn"
    ></teacher-dialog>
  </div>
  </template>

  <script>
  import TeacherDialog from '../../components/Teacherdialog/index'
    export default {
      created() {
        console.log('created');
        //fetchData() 获取数据
      },
      components:{
        TeacherDialog,
      },
      data() {
        return {
          editTitle:'',
          dialogVisible: false,
          tableData: [{
            tId:1,
            image:'../../image/logo-2.png',
            name: '王小虎',
            intro: '上海市普陀区金沙江路 1518 弄'
          }, {
            tId:2,
            image:'',
            name: '王小虎',
            intro: '上海市普陀区金沙江路 1517 弄'
          }, {
            tId:3,
            image:'',
            name: '王小虎',
            intro: '上海市普陀区金沙江路 1519 弄'
          }, {
            tId:4,
            image:'',
            name: '王小虎',
            intro: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
      methods: {
        //教师添加按钮点击事件
        handelAdd(){
          this.dialogVisible = true;
          this.editTitle="添加";
        },
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
        //弹窗关闭事件
        parentFn(val) {
           this.dialogVisible = val;
           console.log('获取数据');
           //fetchData()弹窗操作完获取数据
        },
      },
    }
  </script>

  <style lang="scss" scoped>
    .container{
      width: 90%;
      margin: 0px auto;
    }
  </style>