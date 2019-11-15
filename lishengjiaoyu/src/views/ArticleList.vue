<template>
    <div>
        <h1>{{name}}</h1>
    </div>
</template>
<script>
export default {
    
    data:function(){
        return{
            name:this.$route.query.id,
        }
    }
}
</script>