<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="400"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
      v-for='item in imgs' 
      :key='item.id'
      :img-src = item.img
      >
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        imgs:[
          {id:1,img:'https://picsum.photos/1024/400/?image=52'},
          {id:2,img:'https://picsum.photos/1024/400/?image=54'},
          {id:3,img:'https://picsum.photos/1024/400/?image=54'},
        ]
      }
    },
    created(){
        this.getImage();
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      getImage(){
           axios.get("http://www.douban.com")
            .then((res)=>{
                // this.imgList=res.data.list;
                console.log(res.data)
            }).catch((err)=>{
                console.log(err);
            })
      }
    }
  }
</script>