<template>
<div class='rank'>
    <div v-for='item in items' :key='item.index' >
        <b-card
            :title= item.name
            :img-src= item.img
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>{{item.detaile}}
            </b-card-text>
        </b-card>
        <button style="visibility: hidden">
        </button>
    </div>
</div>
</template>
<script>
export default {
    data: function() {
    return {
       items: [
            { 
                index:1,
                img:'https://picsum.photos/600/300/?image=25',
                name:'高老师',
                detaile:'123465164895416498' },
                
            {   index:2,
                img:'https://picsum.photos/600/300/?image=25',
                name:'高老师',
                detaile:'123465164895416498' },
            {   index:3,
                img:'https://picsum.photos/600/300/?image=25',
                name:'高老师',
                detaile:'123465164895416498' },
            {   index:4,
                img:'https://picsum.photos/600/300/?image=25',
                name:'高老师',
                detaile:'123465164895416498' },
            {   index:5,
                img:'https://picsum.photos/600/300/?image=25',
                name:'高老师',
                detaile:'123465164895416498' 
            },
        ]
    };
},
}
</script>
<style lang="scss">
.rank{
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>