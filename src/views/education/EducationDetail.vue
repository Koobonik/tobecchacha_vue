<template>
  <div>
    <div style="padding-top: 20px;"></div>
    <b-card-text style="margin-bottom: 5px; text-align: start; margin-left: 20px;font-size: 28px; font-weight: bold; color: darkgrey"> Education</b-card-text>
    <div style="text-align: start; padding-left: 20px;margin-right: 20px; margin-bottom: 2px; font-weight: bold; font-size: 26px; letter-spacing: -2.0px; line-height: 30px">{{education.title}}</div>
    <div style="text-align: start; padding-left: 20px; margin-bottom: 10px;font-size: 20px; letter-spacing: -2.0px; color: grey">{{education.subTitle}}</div>
    <b-carousel
        id="carousel-1"

        :interval=false
        controls
        indicators
        background="#abcdef"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;margin-left: 10px; margin-right: 10px"
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

    <b-row style="margin: 10px;">
      <b-col style="text-align: left">

        <div v-html="returnContent" style="font-size: 18px;margin-top: 30px; font-family: 'Yu Gothic'; color: grey;"></div>

<!--        <div style="font-size: 18px; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">프로그램 개요</div>-->
        <div v-html="returnContent" style="font-size: 18px;margin-top: 30px; font-family: 'Yu Gothic'; color: black;"></div>

      </b-col>
    </b-row>
    <div>
      <!--          <img style="position: absolute;top: 50%;margin-top: -50px; margin-right: 100%; margin-left: -30%" src="../../assets/icons/back_icon.png">-->
      <!--          src="../../assets/icons/icons8-tuition-90.png-->
      <b-container class="bv-example-row">
        <b-row style="padding-left: 20px; padding-right: 20px; margin-top: 40px;">
          <b-col style="height: 40%; width: 50%; padding-right: 5px; padding-left: 5px;padding-bottom: 20px;text-align: center;" lg="6" v-for="(item, i) in otherEducation" :key="i">
            <div v-if="i < 4" v-on:click="getEducationDetail(item.id)">
              <img class="customImage" v-bind:src="item.images[0]">
              <div style="font-size: 18px; font-weight: bold; margin-top: 10px; text-align: left;">{{item.title}}</div>
              <div style="font-size: 14px; font-weight: bold;text-align: left; color: rgb(116, 114, 110);">with {{item.withWho}}</div>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div class="mt-3">

        <b-pagination
                :v-model="currentPage"
                :total-rows=Math.ceil(otherEducationLength)
                :per-page="4"
                @change="pageGen"
                align="center">

        </b-pagination>
      </div>
    </div>

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
      currentPage: 1,
      otherEducationLength: 0,
      education: {
        'id': 0,
        'price' : 0,
        'title' : '',
        'subTitle' : '',
        'content' : '',
        'withWho': '',
        'images': [],
        'introduction' : '',
      },
      otherEducation : [
        'id',
        'price',
        'title',
        'subTitle',
        'content',
        'withWho',
        'images',
        'introduction',
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
    pageGen(page) {
      console.log(`${page}`);
      this.getEducation(page-1, 4,false)
    },
    getEducation(page, size, isFirst){
      educationApi.getEducationPageSize(page, size).then(response => {
        this.otherEducation = response;
        if(isFirst){
          this.otherEducationLength = this.otherEducation.length
        }
      }).catch(error => {
        console.log(error);
      })
    },
    getEducationDetail(id){
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
    await this.getEducationDetail(this.$route.query.id);
    await this.getEducation(0,120, true);

  },
  computed: {
    returnContent(){
      return this.education.content.replaceAll('\\n', "<br/>")
    }

  }
}
</script>

<style scoped>

</style>