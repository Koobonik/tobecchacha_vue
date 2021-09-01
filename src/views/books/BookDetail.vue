<template>
  <div>
    <div style="padding-top: 20px;"></div>
    <b-card-text style="margin-bottom: 5px; text-align: start; margin-left: 20px;font-size: 28px; font-weight: bold; color: darkgrey"> Books</b-card-text>
    <div style="text-align: start; padding-left: 20px;margin-right: 20px; margin-bottom: 2px; font-weight: bold; font-size: 26px; letter-spacing: -2.0px; line-height: 30px">{{books.title}}</div>
    <div style="text-align: start; padding-left: 20px; margin-bottom: 10px;font-size: 20px; letter-spacing: -2.0px; color: grey">{{books.subTitle}}</div>
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
      <b-carousel-slide
          v-for="(image, j) in books.images"
          :key="j"
          v-bind:img-src="image"
      >
      </b-carousel-slide>
    </b-carousel>
    <b-row style="margin-left: 10px; margin-right: 10px;">
      <b-col style="text-align: left">
<!--          <b-row style="display: inline-block;">-->
<!--              <b-row style="padding-left: 30px;">-->
<!--&lt;!&ndash;                  <h1 style="font-size: 22px; font-weight: bold; font-family: 'Yu Gothic'">{{books.title}}</h1>&ndash;&gt;-->
<!--                  <div style="width: 20px"></div>-->
<!--                  <h6  v-html="content" style="font-size: 15px; font-family: 'Yu Gothic'; line-height: 22px">{{books.subTitle}}</h6>-->
<!--              </b-row>-->
<!--          </b-row>-->

        <b-card-text style="margin-top: 20px; font-size: 16px; font-weight: bold; font-family: 'Yu Gothic'; color: rgb(116, 114, 110)">
            {{books.createdWho}} 지음 | {{books.publishingHouse}}<br>{{ $moment(books.createdDate).format('YYYY년 MM월 DD일') }} 출간<br>
          ISBN {{books.isbn}} / {{books.pages}}쪽 / {{books.width}} x {{books.height}}cm<br>
          가격 {{books.price}}원
        </b-card-text>
<!--          <b-row>-->
<!--              <div style="width: 70px;">-->
<!--                  <b-col>-->
<!--                      <p class="b-card-text">ISBN</p>-->
<!--                      <p class="b-card-text">쪽수</p>-->
<!--                      <p class="b-card-text">크기</p>-->
<!--                      <p class="b-card-text">가격</p>-->
<!--                  </b-col>-->
<!--              </div>-->

<!--              <div>-->
<!--                  <b-col>원-->
<!--                      <p class="b-card-text">{{books.isbn}}</p>-->
<!--                      <p class="b-card-text">{{books.pages}}쪽</p>-->
<!--                      <p class="b-card-text">{{books.width}}mm * {{books.height}}mm * {{books.depth}}mm / {{books.weight}}g</p>-->
<!--                      <p class="b-card-text">{{books.price}}원</p>-->
<!--                  </b-col>-->
<!--              </div>-->
<!--          </b-row>-->

<!--          <div style="font-size: 18px; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">책소개</div>-->

          <div v-html="returnContent" style="font-size: 18px;margin-top: 30px; font-family: 'Yu Gothic'; color: black;"></div>

          <div style=" text-align: right">
              <img style="padding-left: 20px; height: 30px; margin-bottom: 40px" v-on:click="openNpayLink" alt="Vue logo" src="../../assets/npay_button.png">
          </div>
      </b-col>
    </b-row>
      <div>
<!--          <img style="position: absolute;top: 50%;margin-top: -50px; margin-right: 100%; margin-left: -30%" src="../../assets/icons/back_icon.png">-->
<!--          src="../../assets/icons/icons8-tuition-90.png-->
          <b-container class="bv-example-row">
              <b-row style="padding-left: 20px; padding-right: 20px">
                  <b-col style="height: 40%; width: 50%; padding-right: 10px; padding-left: 10px;padding-bottom: 20px;text-align: center;" lg="6" v-for="(item, i) in otherBooks" :key="i">
                      <div v-if="i < 4" v-on:click="getBookDetail(item.id)" >
                          <img class="customImage" v-bind:src="item.images[0]">
                          <div style="font-size: 18px; font-weight: bold; margin-top: 10px; text-align: left;">{{item.title}}</div>
                          <div style="font-size: 14px; font-weight: bold;text-align: left; color: rgb(116, 114, 110);">{{item.createdWho}} 지음</div>
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
import * as booksApi from "@/api/books";

export default {
name: "BookDetail",
  data() {
    return {
      slide: 0,
      sliding: null,
      currentPage: 1,
      otherBooksLength: 0,
      books: {
        'id': 0,
        'price' : 0,
        'title' : '',
        'subTitle' : '',
        'content' : '',
        'createdWho': '',
        'images': [],
        'width' : 0,
        'height': 0,
        'depth' : 0,
        'weight': 0,
        'publishingHouse': '',
        'isbn': '',
        'pages' : 0,
        'tableOfContent' : '',
        'npayLink':'',
        'bookBinding': '',
        'edition':'',
        'editionNumber' : 0,
        'createdDate':'',
      },
      otherBooks: [
          'id',
          'price',
          'title',
          'content',
          'createdWho',
          'images',
          'width',
          'height',
          'depth',
          'publishingHouse',
          'ISBN',
          'pages',
          'tableOfContent',
          'nPayLink',
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
    // helloworld
    pageGen(page) {
      console.log(`${page}`);
      this.getBooks(page-1, 4,false)
    },

    getBooks(page, size, isFirst){
          booksApi.getBooksPageSize(page, size).then(response => {
              this.otherBooks = response;
              if(isFirst){
                  this.otherBooksLength = this.otherBooks.length
              }
          }).catch(error => {
              console.log(error);
          });
      },
    getBookDetail(id){
      console.log(`${id}`);
      booksApi.getBookDetail(id).then(response => {


        this.books = response;
          this.books.content = this.books.content.replace('\n', '<br />');
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
    await this.getBooks(0,120, true);

  },
  computed: {
    returnContent(){
        return this.books.content.replaceAll('\\n', "<br/>")
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