<template>
    <div>
        <div class="clear">
        <h4 class="fl">{{name}}</h4>
        <span class="more" @click="goList()">更多</span>
        </div>
        <hr>
       <ul v-for='item in items' :key='item.id' >
           <li @click="goDetaile(item)" class="title">{{item.title}}</li>
           <li>{{item.time}}</li>
       </ul>
    </div>
</template>
<style lang="scss">
.clear{
    overflow: hidden;
}
.fl{
    float: left;
}
.more{
    float: right;
    color: gray;
    cursor:pointer;

}
.more:hover{
    color:darkcyan;
}
ul{
    margin:0px;
    padding:0px;
    list-style:none;
    display:flex;
    justify-content:space-between;
}
li{
    display: inline-block;
    list-style:none;
    max-width: 400px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.title{
    cursor:pointer;
}
.title:hover{
    color:darkcyan;
}
</style>
<script>
import router from '../router';
export default {
     props:{
          title:String
      },
       created(){
        this.name=this.title  //初始化时候的赋值
      },
    data:function(){
        return{
            name:'',
            // 根据分类搜索文章列表
            items:[
                {
                    id:1,
                    title:'第一篇第一篇第一篇第一篇第一篇',
                    time:'2019'
                },
                {
                    id:2,
                    title:'第二篇第二篇第二篇第二篇第二篇',
                    time:'2019'
                },
                {
                    id:3,
                    title:'第三篇第三篇第三篇第三篇第三篇',
                    time:'2019'
                },
                {
                    id:4,
                    title:'第四篇第四篇第四篇第四篇第四篇',
                    time:'2019'
                },
                {
                    id:5,
                    title:'第四篇第四篇第四篇第四篇第四篇',
                    time:'2019'
                },
                {
                    id:6,
                    title:'第四篇第四篇第四篇第四篇第四篇',
                    time:'2019'
                },
                {
                    id:7,
                    title:'第四篇第四篇第四篇第四篇第四篇',
                    time:'2019'
                },
                {
                    id:8,
                    title:'第四篇第四篇第四篇第四篇第四篇',
                    time:'2019'
                },
                 {
                    id:9,
                    title:'第四篇第四篇第四篇第四篇第四篇',
                    time:'2019'
                }, {
                    id:10,
                    title:'第四篇第四篇第四篇第四篇第四篇',
                    time:'2019'
                },
            ],
        }
    },
    methods: {
        goDetaile(item){
            router.push({ path: '/articledetaile', query: { id: item.title }})
        },
        goList(){
            router.push({ path: '/articlelist', query: { id: this.title }})
        }
    },
}
</script>