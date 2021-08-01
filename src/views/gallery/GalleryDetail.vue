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
          v-for="(image, j) in gallery.images"
          :key="j"
          v-bind:img-src="image"
      >
<!--        <p style="color: black">{{gallery.imagesDescription[j]}} / {{gallery.width}}cm*{{gallery.height}}cm digital inkjet print</p>-->
      </b-carousel-slide>
      <!-- Slides with custom text -->
    </b-carousel>
    <b-card-text style="font-size: 13px; margin-top: 10px; font-weight: bold; font-family: 'Yu Gothic'; color: rgb(116, 114, 110)">
      - {{gallery.imagesDescription[this.slide]}} -
    </b-card-text>

    <b-row style="margin: 20px;">
      <b-col style="text-align: left">
        <b-row style="display: inline-block;">
          <b-row style="padding-left: 30px;">
            <h1 style="font-size: 22px; font-weight: bold; font-family: 'Yu Gothic'">{{gallery.title}}</h1>
            <div style="width: 20px"></div>
            <h6 style="font-size: 15px; font-family: 'Yu Gothic'; line-height: 22px">{{gallery.subTitle}}</h6>
          </b-row>
        </b-row>

        <b-card-text style="font-size: 13px; font-weight: bold; font-family: 'Yu Gothic'; color: rgb(116, 114, 110)">
          {{gallery.createdWho}} 작품 | {{gallery.createdEmail}} | {{ $moment(gallery.createdDate).format('YYYY년 MM월 DD일') }} 출간
        </b-card-text>

        <div style="margin-top: 30px;"></div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">작품제목</div>
        <div style="font-size: 14px; font-family: 'Yu Gothic'; color: rgb(116, 114, 110);">{{gallery.title}}</div>

        <div style="margin-top: 30px;"></div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">작품소개</div>
        <div v-html="returnContent" style="font-size: 14px; font-family: 'Yu Gothic'; color: rgb(116, 114, 110);">{{gallery.content}}</div>

        <div style="margin-top: 30px;"></div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">작품설명</div>
        <div v-html="returnInformation" style="font-size: 14px; font-family: 'Yu Gothic'; color: rgb(116, 114, 110);">{{gallery.information}}</div>

        <div v-if="gallery.npayLink != null">
          <div style="margin-top: 30px;"></div>
          <div style="font-size: 18px; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">작품가격</div>
          <div style="font-size: 14px; font-family: 'Yu Gothic'; color: rgb(116, 114, 110);">{{gallery.price}}원</div>
        </div>

<!--        <div style="font-size: 18px; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">책소개</div>-->

<!--        <div style="font-size: 14px; font-family: 'Yu Gothic'; color: rgb(116, 114, 110);">{{gallery.content}}</div>-->

        <div v-if="gallery.npayLink != null" style=" text-align: right">
          <img style="padding-left: 20px; height: 30px;" v-on:click="openNpayLink" alt="Vue logo" src="../../assets/npay_button.png">
        </div>
      </b-col>
    </b-row>

<!--    <div style="padding: 20px;">-->
<!--      <p>{{gallery.createdWho}}</p>-->

<!--      <b-card-text style="text-align: center; padding-left: 50px;">-->
<!--        <strong>{{ gallery.title }}</strong>-->
<!--      </b-card-text>-->
<!--      <b-card-text>-->
<!--        {{ gallery.content }}-->
<!--      </b-card-text>-->
<!--      <b-card-text>-->
<!--        {{ $moment(gallery.createdDate).format('YYYY년 MM월') }} {{ gallery.information }}-->
<!--      </b-card-text>-->
<!--      <b-card-text>-->
<!--        작품구입 가격{{ gallery.information }}원 <img style="padding-left: 20px; height: 20px;" v-on:click="openNpayLink" alt="Vue logo" src="../../assets/npay_img.png">-->
<!--      </b-card-text>-->
<!--      <b-card-text>-->
<!--        구매 문의 - {{gallery.createdEmail}}-->
<!--      </b-card-text>-->

<!--    </div>-->

  </div>

</template>

<script>
import * as galleryApi from "/src/api/gallery";

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

  },
  computed: {
    returnContent(){
      return this.gallery.content.replaceAll('\\n', "<br/>")
    },
    returnInformation(){
      return this.gallery.information.replaceAll('\\n', "<br/>")
    }
  }
}
</script>

<style scoped>

</style>