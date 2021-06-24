<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col v-for="(item, i) in gallery" :key="i" lg="6" aria-controls="overlay-background" style="padding: 30px" v-on:click="GalleryDetailPage(item.id)">
          <b-carousel
              id="carousel-1"

              :interval=false
              controls
              indicators
              background="#abcdef"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"

          >
            <!-- Text slides with image -->
            <b-carousel-slide
                v-for="(image, j) in item.images"
                :key="j"
                v-bind:img-src="image"
                v-b-hover="hoverEvent"
            >
              <div>
                <h4>제목 : <strong>{{ item.title }}</strong></h4>
                <h4>작가 : <strong>{{item.createdWho}}</strong></h4>
              </div>
            </b-carousel-slide>


            <!-- Slides with custom text -->
          </b-carousel>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import * as galleryApi from "@/api/gallery";
import router from "../../router";
export default {
name: "GalleryPage",
  data() {
    return {
      slide: 0,
      sliding: null,
      shown: false,
      variant: 'light',
      opacity: 0.85,
      blur: '2px',
      variants: [
        'transparent',
        'white',
        'light',
        'dark',
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
      ],
      blurs: [
        { text: 'None', value: '' },
        '1px',
        '2px',
        '5px',
        '0.5em',
        '1rem'
      ],
      gallery: [
          'id',
          'price',
          'title',
          'content',
          'createdWho',
          'images',
          'width',
          'height',
          'nPayLink',
          'imagesDescription',
          'shown'
      ]
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
      this.slide = slide;
    },
    // eslint-disable-next-line no-unused-vars
    onSlideEnd(slide) {
      this.sliding = false;
      this.slide = slide;
    },
    hoverEvent(isHovered){
      console.log(isHovered);
      if(isHovered){
        this.opacity = 0.2;
        this.shown = true;
      }
      else {
        this.opacity = 1.0;
        this.shown = false;
      }
    },
    changeShown(item){
      console.log("바꾸니다");
      item.shown = !item.shown;
    },
    getGallery(page, size){
      galleryApi.getGalleryPageSize(page, size).then(response => {
        console.log('허허');

        this.gallery = response;
        for(var i = 0; i < this.gallery.length; i++){
          this.gallery[i].shown = false;
        }

        console.log(this.gallery);
      }).catch(error => {
        console.log(error);
      })
    },
    GalleryDetailPage (id) {
      router.push(`/galleryDetail?id=${id}`);
    }

  },
  async created() {
    await this.getGallery(0, 10);

  }
}
</script>

<style scoped>

</style>