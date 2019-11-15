<template>
    <div>
        <h1>{{id}}</h1>
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            id:this.$route.query.id,
        }
    }
}
</script>