<template>
    <div class="container">
        <h1>{{title}}</h1>
    </div>
</template>
<style lang="scss" scoped>
    .container{
        width: 80%;
        margin: 0 auto;
    }
</style>
<script>
export default {
    data(){
        return{
            title:'',
            id:null,
        }
    },
    computed: {
        isEdit() {
            return this.$route.meta.isEdit // 根据meta判断
            // return this.$route.path.indexOf('edit') !== -1 // 根据路由判断
        }
    },
    created() {
        if (this.isEdit) { 
            // this.fetchData(ID);
            //根据文章ID取内容
            // console.log('bianji');
            this.title = '编辑文章';
            this.id=this.$route.query.id;
            console.log(this.id);
        }
        else{
            console.log('添加');
            this.title = '新建文章';
        }
    },

}
</script>