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
          v-for="(image, j) in books.images"
          :key="j"
          v-bind:img-src="image"
      >
      </b-carousel-slide>


      <!-- Slides with custom text -->
    </b-carousel>
    <br>
    <b-row style="margin: 20px;">
      <b-col style="text-align: left">
<!--        <b-card-text>-->
<!--          지은이 : {{books.createdWho}}-->
<!--        </b-card-text>-->
<!--        <b-card-text>-->
<!--          출판 : {{books.createdWho}}-->
<!--        </b-card-text>-->
<!--          <div style="background-color: red; width: 300px; height: 300px; display: inline-block">-->
<!--          </div>-->
          <b-row style="display: inline-block;">
              <b-row style="padding-left: 30px;">
                  <h1 style="font-size: 22px; font-weight: bold; font-family: 'Yu Gothic'">{{books.title}}</h1>
                  <div style="width: 20px"></div>
                  <h6 style="font-size: 15px; font-family: 'Yu Gothic'; line-height: 22px">{{books.title}}</h6>
              </b-row>
          </b-row>

        <b-card-text style="font-size: 13px; font-weight: bold; font-family: 'Yu Gothic'; color: rgb(116, 114, 110)">
            {{books.createdWho}} 지음 | {{books.publishingHouse}} | {{ $moment(books.createdDate).format('YYYY년 MM월 DD일') }} 출간
        </b-card-text>
          <b-row>
              <div style="width: 70px;">
                  <b-col>
                      <p class="b-card-text">ISBN</p>
                      <p class="b-card-text">쪽수</p>
                      <p class="b-card-text">크기</p>
                      <p class="b-card-text">가격</p>
                  </b-col>
              </div>

              <div>
                  <b-col>
                      <p class="b-card-text">{{books.isbn}}</p>
                      <p class="b-card-text">{{books.pages}}쪽</p>
                      <p class="b-card-text">{{books.width}}mm * {{books.height}}mm * {{books.depth}}mm / </p>
                      <p class="b-card-text">{{books.price}}원</p>
                  </b-col>
              </div>
          </b-row>

          <div style="font-size: 18px; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">책소개</div>

          <div style="font-size: 14px; font-family: 'Yu Gothic'; color: rgb(116, 114, 110);">{{books.content}}</div>

          <div style=" text-align: right">
              <img style="padding-left: 20px; height: 30px;" v-on:click="openNpayLink" alt="Vue logo" src="../../assets/npay_button.png">
          </div>
<!--        <b-card-text class="b-card-text">-->
<!--          (글, 그림 외) : {{books.createdWho}}-->
<!--        </b-card-text>-->
<!--          <b-card-text class="b-card-text">-->
<!--          (발행번호) : {{books.isbn}}-->
<!--        </b-card-text>-->
<!--          <b-card-text class="b-card-text">-->
<!--          (페이지수) : {{books.pages}}, (제본) {{books.bookBinding}}-->
<!--        </b-card-text>-->
<!--          <b-card-text class="b-card-text">-->
<!--          (책사이즈) : {{books.width}}cm*{{books.height}}cm*{{books.depth}}cm-->
<!--        </b-card-text>-->
<!--          <b-card-text class="b-card-text">-->
<!--          (발행년월일) {{ $moment(books.createdDate).format('YYYY년MM월DD일') }} (발간정보) {{books.edition}} {{books.editionNumber}}쇄 {{books.price}}원-->
<!--        </b-card-text>-->
<!--          <b-card-text class="b-card-text">-->
<!--          (제작) {{books.publishingHouse}} (가격) {{books.price}}원 <img v-on:click="openNpayLink" alt="Vue logo" src="../../assets/npay_img.png" style="height: 20px; margin-left: 10px;">-->
<!--        </b-card-text>-->

      </b-col>
    </b-row>
<!--    <hr style="border: 1px solid black">-->
<!--    <b-card-text style="padding-right: 20px; padding-left: 20px; padding-top: 20px">{{books.content}}</b-card-text>-->
<!--    <br>-->
<!--    <b-card-text style="padding: 20px">{{books.tableOfContent}}</b-card-text>-->
  </div>

</template>

<script>
import * as booksApi from "@/api/books";

export default {
name: "BookDetail",
  data() {
    return {
      slide: 0,
      sliding: null,
      books: {
        'id': 0,
        'price' : 0,
        'title' : '',
        'content' : '',
        'createdWho': '',
        'images': [],
        'width' : 0,
        'height': 0,
        'depth' : 0,
        'publishingHouse': '',
        'isbn': '',
        'pages' : 0,
        'tableOfContent' : '',
        'npayLink':'',
        'bookBinding': '',
        'edition':'',
        'editionNumber' : 0,
        'createdDate':'',

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
      booksApi.getBookDetail(id).then(response => {


        this.books = response;
        console.log("여기를봐");
        console.log(this.books.images);
      }).catch(error => {
        console.log(error);
      })
    },
    openNpayLink(){
      window.open(this.books.npayLink, '_blank').focus();
    }

  },
  async created() {
    await this.getBookDetail(this.$route.query.id);

  }
}
</script>

<style scoped>
    .b-card-text {
        font-size: 13px;
        line-height: 5px;
        color: rgb(116, 114, 110);
    }
</style>