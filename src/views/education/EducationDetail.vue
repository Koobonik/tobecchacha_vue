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
        style="text-shadow: 1px 1px 2px #333;margin-left: 20px; margin-right: 20px"
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

    <b-row style="margin: 20px;">
      <b-col style="text-align: left">
        <b-row style="display: inline-block;">
          <b-row style="padding-left: 30px;">
            <h1 style="font-size: 22px; font-weight: bold; font-family: 'Yu Gothic'">{{education.title}}</h1>
            <div style="width: 20px"></div>
            <h6 style="font-size: 15px; font-family: 'Yu Gothic'; line-height: 22px">{{education.subTitle}}</h6>
          </b-row>
        </b-row>



        <div style="font-size: 18px; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">프로그램 개요</div>

        <div v-html="returnContent" style="font-size: 14px; font-family: 'Yu Gothic'; color: rgb(116, 114, 110);">{{education.introduction}}</div>

      </b-col>
    </b-row>

<!--    <hr style="border: 1px solid black">-->

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
        'subTitle' : '',
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

  },
  computed: {
    returnContent(){
      return this.education.introduction.replaceAll('\\n', "<br/>")
    }
  }
}
</script>

<style scoped>

</style>