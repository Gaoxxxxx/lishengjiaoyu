<template>
    <div class='container'>
        <el-button type="primary" plain style="width:100%" @click= add>添加文章</el-button>
        <el-table
        :data="articlelist"
        style="width: 100%;margin:50px auto"
        >
            <el-table-column
            prop="ID"
            label="文章编号"
            width="180">
            </el-table-column>
            <el-table-column
            prop="title"
            label="文章标题"
            width="300">
            </el-table-column>
            <el-table-column
            prop="type"
            label="文章分类"
            width="200">
            </el-table-column>
            <el-table-column
            prop="time"
            label="文章时间"
            width="180">
            </el-table-column>
            <el-table-column
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
                    <el-button
                    type="text"
                    size="small"
                    @click= handelEdit(scope.row.ID)
                    >
                    编辑
                    </el-button>
                </template>
                </el-table-column>
        </el-table>
    </div>
</template>
<style lang="scss" scoped>
    .container{
        width: 80%;
        margin: 60px auto;
    }
</style>
<script>
export default {
    created() {
        //fetchdata()
        //从后台获取数据
    },
    data(){
        return{
            articlelist:[
                {
                    ID:1,
                    title:'第一篇',
                    time:2019,
                    type:'最新公告'
                },
                {
                    ID:2,
                    title:'第2篇',
                    time:2019,
                    type:'高分秘笈'
                },
                {
                    ID:3,
                    title:'第3篇',
                    time:2019,
                    type:'高分秘笈'
                },
                {
                    ID:4,
                    title:'第4篇',
                    time:2019,
                    type:'高分秘笈'
                },
            ],

        }
    },
    methods: {
        handelDelete(index){
            this.$confirm('确认删除').then(()=>{
                // 前端删除
                var arr = [...this.articlelist];
                arr.splice(index,1);
                this.articlelist = arr;
                //后端删除
                //axios......
            }).catch(_ => {});  
        },
        handelEdit(ID){
            // console.log(ID);
            //根据文章id进行编辑
            //根据路由把ID传入编辑页面
            this.$router.push({name:'编辑form',query: { id: ID }})
        },
        add(){
            // console.log('add');
            //直接转到添加页面
            this.$router.push({name:'创建form'})

        }
    },
}
</script>