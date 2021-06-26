<template>
  <div>
    <b-carousel
        id="carousel-1"

        :interval=false
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
<!--        <p style="color: black">{{gallery.imagesDescription[j]}} / {{gallery.width}}cm*{{gallery.height}}cm digital inkjet print</p>-->
      </b-carousel-slide>


      <!-- Slides with custom text -->
    </b-carousel>
    <br>
    <div style="padding: 20px;">
      <p> (성명) {{gallery.createdWho}} </p>

      <b-card-text style="text-align: center; padding-left: 50px;">
        (제목) <strong>{{ gallery.title }}</strong>
      </b-card-text>
      <b-card-text>
        (작품 설명) {{ gallery.content }}
      </b-card-text>
      <b-card-text>
        (전시 정보) {{ $moment(gallery.createdDate).format('YYYY년 MM월') }} {{ gallery.information }}
      </b-card-text>
      <b-card-text>
        (작품 정보) 작품구입 가격{{ gallery.information }}원 (모든 작품) <img style="padding-left: 20px; height: 20px;" v-on:click="openNpayLink" alt="Vue logo" src="../../assets/npay_img.png">
      </b-card-text>
      <b-card-text>
        구매 문의 - {{gallery.createdEmail}}
      </b-card-text>

    </div>

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