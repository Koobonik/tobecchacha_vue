<template>
  <div>
    <div style="padding-top: 20px;"></div>
    <b-card-text style="margin-bottom: 5px; text-align: start; margin-left: 20px;font-size: 24px; font-weight: bold; color: darkgrey"> ETC</b-card-text>
    <div class="title-css">{{etc.title}}</div>
    <div style="text-align: start; padding-left: 20px; margin-bottom: 10px;font-size: 16px; letter-spacing: -2.0px; color: grey">{{etc.subTitle}}</div>
      <video v-if="etc.images[0].endsWith('mp4')" autoplay v-bind:src="etc.images[0]" controls loop></video>
    <b-carousel
            v-else
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
      <b-carousel-slide
          v-for="(image, j) in etc.images"
          :key="j"
          v-bind:img-src="image"
      >
      </b-carousel-slide>
    </b-carousel>
    <b-row style="margin-left: 10px; margin-right: 10px;">
      <b-col style="text-align: left">

          <div v-html="returnInformationContent" style="font-size: 18px;margin-top: 30px; font-family: 'Yu Gothic'; color: grey;"></div>

          <div v-if="etc.videoLinks !== null">
              <a v-for="(item, i) in etc.videoLinks" :key="i" v-bind:href="item" target="_blank">{{item}}</a>
          </div>


          <div v-html="returnContent" style="text-align:justify; font-size: 18px;margin-top: 30px; font-family: 'Yu Gothic'; color: black;"></div>

      </b-col>
    </b-row>
      <div style="height: 50px"></div>
      <div>
<!--          <img style="position: absolute;top: 50%;margin-top: -50px; margin-right: 100%; margin-left: -30%" src="../../assets/icons/back_icon.png">-->
<!--          src="../../assets/icons/icons8-tuition-90.png-->
          <b-container class="bv-example-row">
              <b-row style="padding-left: 20px; padding-right: 20px">
                  <b-col style="height: 40%; width: 50%; padding-right: 5px; padding-left: 5px;text-align: center;" lg="6" v-for="(item, i) in otherEtcs" :key="i">
                      <div v-if="i < 4" v-on:click="getEtcDetail(item.id)" style="padding-bottom: 20px;">
                          <img class="customImage" v-bind:src="item.images[0]">
                          <div style="font-size: 18px; font-weight: bold; margin-top: 10px; text-align: left;">{{item.title}}</div>
                          <div style="font-size: 14px; font-weight: bold;text-align: left; color: rgb(116, 114, 110);">{{item.withWho}}</div>
                      </div>
                  </b-col>
              </b-row>
          </b-container>
      </div>
    <div class="mt-3">

      <b-pagination
          :v-model="currentPage"
          :total-rows=Math.ceil(otherBooksLength)
          :per-page="4"
          @change="pageGen"
          align="center">

      </b-pagination>
    </div>

  </div>

</template>

<script>
import * as etcApi from "@/api/etc";

export default {
name: "BookDetail",
  data() {
    return {
      slide: 0,
      sliding: null,
      currentPage: 1,
      otherBooksLength: 0,
      etc: {
        'id': 0,
        'title' : '',
        'subTitle' : '',
        'informationContent' : '',
        'content' : '',
        'withWho' : '',
        'videoLinks' :[],
        'images': [],
      },
      otherEtcs: [
          'id',
          'title',
          'subTitle',
          'informationContent',
          'content',
          'withWho',
          'videoLinks',
          'images',
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
    // helloworld
    pageGen(page) {
      console.log(`${page}`);
      this.getEtcs(page-1, 4,false)
    },

    getEtcs(page, size, isFirst){
          etcApi.getEtcPageSize(page, size).then(response => {
              this.otherEtcs = response;
              if(isFirst){
                  this.otherBooksLength = this.otherEtcs.length
              }
          }).catch(error => {
              console.log(error);
          });
      },
    getEtcDetail(id){
      console.log(`${id}`);
      etcApi.getEtcDetail(id).then(response => {


        this.etc = response;
          this.etc.content = this.etc.content.replace('\n', '<br />');
        console.log("여기를봐");
        console.log(this.etc.images);
      }).catch(error => {
        console.log(error);
      })
    },
    openNpayLink(){
      window.open(this.etc.npayLink, '_blank').focus();
    }

  },
  async created() {
    await this.getEtcDetail(this.$route.query.id);
    await this.getEtcs(0,120, true);

  },
  computed: {
    returnContent(){
        return this.etc.content.replaceAll('\\n', "<br/>")
      },
      returnInformationContent(){
          return this.etc.informationContent.replaceAll('\\n', "<br/>")
      }
  }
}
</script>

<style>
    .b-card-text {
        font-size: 13px;
        line-height: 5px;
        color: rgb(116, 114, 110);
    }
    .customImage {
        width:100%!important ;
        height: 120px;
        /*outline: black;*/
        /*background-size: 100%, 100%; border: 1px solid black; background-image: none;*/
        object-fit: cover!important;
    }
</style>