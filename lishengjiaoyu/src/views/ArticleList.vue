<template>
    <div class='list-container'>
        <h3>{{name}}</h3>
        <hr/>
        <ul v-for='item in items' 
            :key='item.id' 
            id="my-list"
            :per-page="perPage"
            :current-page="currentPage">
           <li @click="goDetaile(item)" class="title">{{item.title}}</li>
           <li>{{item.time}}</li>
        </ul>
        <div class="load-button">
         <b-button block variant="outline-info" @click="getMore()">点击加载</b-button>

        </div>
         
    </div>
</template>
<style lang="scss">
.list-container{
    width: 45%;
    margin: 100px auto;
    h3{
        text-align: center;
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
    .load-button{
        width: 20%;
        margin: 50px auto;
    }

}

</style>
<script>
import router from '../router';    
export default {
    data:function(){
        return{
            currentNum:'',//记录当前页面是第几页
            //每页20条每当点击加载就在加载20条
            name:this.$route.query.id,
            items:[
                {
                    id:1,
                    title:'第1篇第1篇第1篇第1篇第1篇',
                    time:'2019'
                },
                {
                    id:2,
                    title:'第2篇第2篇第2篇第2篇第2篇',
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
    created() {
        
    },
   
    methods: {
        goDetaile(item){
            router.push({ path: '/articledetaile', query: { id: item.title }})
        },
        getMore(){
            // 获取数据
        },
        
    }
}
</script>