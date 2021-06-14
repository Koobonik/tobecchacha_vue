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
          v-for="(image, j) in education.images"
          :key="j"
          v-bind:img-src="image"
      >
      </b-carousel-slide>


      <!-- Slides with custom text -->
    </b-carousel>
    <br>
    <div>
      <h3>프로그램 개요</h3><br>
      <h4>{{ education.introduction }}</h4>
      <br><br>
      <h5>{{education.content}}</h5>
    </div>

    <hr style="border: 1px solid black">

  </div>

</template>

<script>
import * as educationApi from "@/api/education";

export default {
name: "EducationDetail",
  data() {
    return {
      slide: 0,
      sliding: null,
      education: {
        'id': 0,
        'price' : 0,
        'title' : '',
        'content' : '',
        'withWho': '',
        'images': [],
        'introduction' : '',
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
      educationApi.getEducationDetail(id).then(response => {


        this.education = response;
        console.log("여기를봐");
        console.log(this.education.images);
      }).catch(error => {
        console.log(error);
      })
    },
    openNpayLink(){
      window.open(this.education.npayLink, '_blank').focus();
    }

  },
  async created() {
    await this.getBookDetail(this.$route.query.id);

  }
}
</script>

<style scoped>

</style>