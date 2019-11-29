<template>
    <div>
        <div  class="acontainer">
            <h3>{{id}}</h3>
            <div class="clear title-bar">
                <div class="fl">
                    <span>发布人:</span>
                    <span>{{articledetaile.author}}</span>
                </div>
                <div class="fr">
                    <span>{{articledetaile.time}}</span>
                </div>
            </div>
            <div class='article-content'>
                <!-- 后台传入文章带格式 -->
                {{articledetaile.content}}
            </div>
        </div>
        
    </div>
</template>
<style lang="scss">
.clear{
    clear: both;
}
.fl{
    float: left;
}
.fr{
    float: right;
}
.acontainer{
    width: 70%;
    margin: 100px auto;
    h3{
        text-align: center
    }
    .title-bar{
        width: 20%;
        margin: 0 auto;
    }
    .article-content{
        width: 65%;
        margin: 0 auto;
    }
}
</style>
<script>
export default {
    data:function(){
        return{
            id:this.$route.query.id,
            articledetaile:{
                id:this.$route.query.id,
                content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                time:2019,
                author:'lalalal'
            }
        }
    }
}
</script>