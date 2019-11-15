<template>
    <div class="img-container">
        <div class="img-box">
            <b-img  class='img' v-for='item in imgs' :key='item.index' fluid rounded src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
            
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            imgs:[
                {index:1,
                img:'https://picsum.photos/250/250/?image=54',
                },
                {index:2,
                img:'https://picsum.photos/250/250/?image=54',
                },
                {index:3,
                img:'https://picsum.photos/250/250/?image=54',
                },
                {index:4,
                img:'https://picsum.photos/250/250/?image=54',
                },
                {index:5,
                img:'https://picsum.photos/250/250/?image=54',
                },
                {index:6,
                img:'https://picsum.photos/250/250/?image=54',
                },
                {index:7,
                img:'https://picsum.photos/250/250/?image=54',
                },
                {index:8,
                img:'https://picsum.photos/250/250/?image=54',
                },
            ]
        }
    }
}
</script>
<style lang="scss">
.img-container{
    background-color:#E2E7ED;
    padding: 20px 30px;    
}
.img-box{
    margin: 0 auto;
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
}
.img{
    margin-bottom: 20px;
}
</style>