<template>
    <div id = "RotationChart">
        <div id="item"  v-for="(obj,index) in imgList " :key='index' v-show="index == nowIndex" >
            <img :src="obj.img" alt="这是一张图片" @click="Mask(index)">
            
        </div>
        <ul id="page">
            <li v-for="(obj,index) in imgList" :key="index"  :class="{seleted:index === nowIndex}" @click="jump(index)">{{index+1}}</li>
        </ul>
        
    </div>
</template>
<script>
import axios from 'axios';
export default{
    
    data(){
        return{
            // 这里加载图片的路径必须使用require引入，方便webpack打包。
            imgList:[],
            nowIndex:1,
            timer:null,
            isShow:false,
            
        }

    },
    created(){
        this.getImgList(this.imgList.length);
        this.play()  
    },
    
    methods:{
        play(){  //自动轮播
            if(this.timer == null){
                this.timer = setInterval(()=>{
                this.nowIndex++;
                if(this.nowIndex == this.imgList.length){
                    this.nowIndex = 0;
                }
            },3000)
            }
            
        },
        jump(index){
            clearInterval(this.timer);
            this.nowIndex = index;
            this.timer = null;
            this.play();
        },
        getImgList(num){
            axios.get("http://www.douban.com")
            .then((res)=>{
                this.imgList=res.data.list;
                // console.log(res.data.list.img)
            }).catch((err)=>{
                console.log(err);
            })
        }
        
    },
    computed:{
        
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
ul{
    list-style: none;
}
img{
    width: 100%;
    height: 500px;
}
#RotationChart{
    margin-top: 20px;
    /* 图片居中 */
    text-align: center;
    position: relative;
}

#page{
    list-style: none;
    display: block;
    position: absolute;
    right: 20px;
    bottom: 10px;
}
#page li{
    height: 20px;
    width: 20px;
    float: left;
    margin-right: 5px;
    background: rgba(0, 0, 0, 0.3);
    border-radius:5px;
    text-align: center;
    line-height: 20px;
    font-size: 80%;
    font-weight: 700;
    cursor: pointer;

}
#page .seleted{
    background: #f00;
}
</style>