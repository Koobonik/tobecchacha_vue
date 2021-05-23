<template>
  <div>
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#abcdef"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
          v-for="(image, j) in gallery.images"
          :key="j"
          v-bind:img-src="image"
      >
        <p style="color: black">{{gallery.imagesDescription[j]}} / {{gallery.width}}cm*{{gallery.height}}cm digital inkjet print</p>
      </b-carousel-slide>


      <!-- Slides with custom text -->
    </b-carousel>
    <br>
    <p> 작가 : {{gallery.createdWho}} / {{gallery.createdEmail}}<img style="padding-left: 20px;" v-on:click="openNpayLink" alt="Vue logo" src="../../assets/npay_img.png"> </p>

    <b-card-text style="text-align: left; padding-left: 50px;">
      <h3>{{ gallery.title }}</h3>
    </b-card-text>
    <b-card-text>
      {{ gallery.content }}
    </b-card-text>
    <b-card-text>
      {{ $moment(gallery.createdDate).format('YYYY년 MM월') }} {{ gallery.information }}
    </b-card-text>
  </div>

</template>

<script>
import * as galleryApi from "@/api/gallery";

export default {
name: "GalleryDetail",
  data() {
    return {
      slide: 0,
      sliding: null,
      gallery: {
        'id': 0,
        'price' : 0,
        'title' : '',
        'content' : '',
        'createdWho': '',
        'images': [],
        'imagesDescription' : [],
        'width' : 0,
        'height': 0,
        'npayLink':'',
        'createdEmail' : '',
        'createdDate' : '',
        'information': '',

      }
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
    getBookDetail(id){
      console.log(`${id}`);
      galleryApi.getGalleryDetail(id).then(response => {


        this.gallery = response;
        console.log("여기를봐");
        console.log(this.gallery.images);
      }).catch(error => {
        console.log(error);
      })
    },
    openNpayLink(){
      window.open(this.gallery.npayLink, '_blank').focus();
    }

  },
  async created() {
    await this.getBookDetail(this.$route.query.id);

  }
}
</script>

<style scoped>

</style>