<template>
  <div>
    <div style="padding-top: 20px;"></div>
    <b-card-text style="margin-bottom: 5px; text-align: start; margin-left: 20px;font-size: 28px; font-weight: bold; color: darkgrey"> Gallery</b-card-text>
    <div style="text-align: start; padding-left: 20px;margin-right: 20px; margin-bottom: 2px; font-weight: bold; font-size: 26px; letter-spacing: -2.0px; line-height: 30px">{{gallery.title}}</div>
    <div style="text-align: start; padding-left: 20px; margin-bottom: 10px;font-size: 20px; letter-spacing: -2.0px; color: grey">{{gallery.subTitle}}</div>
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
        <b-card-text style="margin-top: 20px; font-size: 16px; font-weight: bold; font-family: 'Yu Gothic'; color: rgb(116, 114, 110)">
          {{gallery.createdWho}} 지음 | {{gallery.createdEmail}} | {{ $moment(gallery.createdDate).format('YYYY년 MM월 DD일') }} 출간<br>
          {{gallery.width}} x {{gallery.height}}cm<br>
          가격 {{gallery.price}}원
        </b-card-text>

<!--        <div style="margin-top: 30px;"></div>-->
<!--        <div style="font-size: 18px; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">작품제목</div>-->
<!--        <div style="font-size: 14px; font-family: 'Yu Gothic'; color: rgb(116, 114, 110);">{{gallery.title}}</div>-->

        <div style="margin-top: 30px;"></div>
<!--        <div style="font-size: 18px; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">작품소개</div>-->
        <div v-html="returnContent" style="font-size: 18px;margin-top: 30px; font-family: 'Yu Gothic'; color: black;"></div>
<!--        <div style="margin-top: 30px;"></div>-->
<!--        <div style="font-size: 18px; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">작품설명</div>-->
<!--        <div v-html="returnInformation" style="font-size: 18px;margin-top: 30px; font-family: 'Yu Gothic'; color: black;"></div>-->

<!--        <div v-if="gallery.npayLink != null">-->
<!--          <div style="margin-top: 30px;"></div>-->
<!--          <div style="font-size: 18px; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">작품가격</div>-->
<!--          <div style="font-size: 14px; font-family: 'Yu Gothic'; color: rgb(116, 114, 110);">{{gallery.price}}원</div>-->
<!--        </div>-->

<!--        <div style="font-size: 18px; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">책소개</div>-->

<!--        <div style="font-size: 14px; font-family: 'Yu Gothic'; color: rgb(116, 114, 110);">{{gallery.content}}</div>-->

        <div v-if="gallery.npayLink != null" style=" text-align: right">
          <img style="padding-left: 20px; height: 30px;" v-on:click="openNpayLink" alt="Vue logo" src="../../assets/npay_button.png">
        </div>
      </b-col>
    </b-row>
    <b-container class="bv-example-row">
      <b-row style="padding-left: 20px; padding-right: 20px; margin-top: 40px;">
        <b-col style="height: 40%; width: 50%; padding-right: 5px; padding-left: 5px;padding-bottom: 20px;text-align: center;" lg="6" v-for="(item, i) in otherGalley" :key="i">
          <div v-if="i < 4" v-on:click="getGalleyDetail(item.id)" >
            <img class="customImage" v-bind:src="item.images[0]">
            <div style="font-size: 18px; font-weight: bold; margin-top: 10px; text-align: left;">{{item.title}}</div>
            <div style="font-size: 14px; font-weight: bold;text-align: left; color: rgb(116, 114, 110);">{{item.createdWho}}</div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="mt-3">

      <b-pagination
              :v-model="currentPage"
              :total-rows=Math.ceil(otherGalleryLength)
              :per-page="4"
              @change="pageGen"
              align="center">

      </b-pagination>
    </div>
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
      currentPage: 1,
      otherGalleryLength: 0,
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
      },
      otherGalley: [
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
    pageGen(page) {
      console.log(`${page}`);
      this.getGallery(page-1, 4,false)
    },
    getGallery(page, size, isFirst){
      galleryApi.getGalleryPageSize(page, size).then(response => {
        console.log(`${page} 이면서 ${size}`);

        this.otherGalley = response;
        if(isFirst){
          this.otherGalleryLength = this.otherGalley.length
        }
        console.log(this.gallery);
      }).catch(error => {
        console.log(error);
      })
    },
    getGalleyDetail(id){
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
    await this.getGalleyDetail(this.$route.query.id);
    await this.getGallery(0,120, true);

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