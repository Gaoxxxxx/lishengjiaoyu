<template>
    <el-dialog
    :title="diatitle" 
    :visible.sync="flag"
    width="40%"
    :before-close="close">
        <span>教师编号:</span>
        <el-input placeholder="请输入内容" v-model="input.ID" style="width:120px">
        </el-input><br/><br/>
        <span>教师名称:</span>
        <el-input placeholder="请输入内容" v-model="input.title" style="width:120px">
        </el-input><br/><br/>
        <span>教师介绍:</span>
        <el-input type="textarea" placeholder="请输入内容" v-model="input.syn" style="width:300px">
        </el-input><br/><br/>
        <span>教师头像:</span>
        <!-- action为上传地址   -->
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
</template>
<style lang="scss" scoped>
    
</style>
<script>
export default {
    // name:TeacherDialog,
    data() {
        return {
            fileList:[],
            input:{
                ID:'',
                title:'',
                syn:'',
            },
            dialogVisible:null,
            editTitle:'',
        }
    },
    props:['flag','diatitle'],
    methods: {
        close(){
            var val=false;
            this.$emit('childFn', val);
        },
        //上传头像
        handleRemove(file, fileList) {
        console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
    },
}
</script>