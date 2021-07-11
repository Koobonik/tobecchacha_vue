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
          <b-row style="display: inline-block;">
              <b-row style="padding-left: 30px;">
                  <h1 style="font-size: 22px; font-weight: bold; font-family: 'Yu Gothic'">{{books.title}}</h1>
                  <div style="width: 20px"></div>
                  <h6 style="font-size: 15px; font-family: 'Yu Gothic'; line-height: 22px">{{books.subTitle}}</h6>
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
                      <p class="b-card-text">{{books.width}}mm * {{books.height}}mm * {{books.depth}}mm / {{books.weight}}g</p>
                      <p class="b-card-text">{{books.price}}원</p>
                  </b-col>
              </div>
          </b-row>

          <div style="font-size: 18px; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">책소개</div>

          <div style="font-size: 14px; font-family: 'Yu Gothic'; color: rgb(116, 114, 110);">{{books.content}}</div>

          <div style=" text-align: right">
              <img style="padding-left: 20px; height: 30px;" v-on:click="openNpayLink" alt="Vue logo" src="../../assets/npay_button.png">
          </div>
      </b-col>
    </b-row>
      <b-container class="bv-example-row">
      <b-row>
          <b-col style="height: 45%; width: 45%; padding: 30px;text-align: center;" lg="6" v-for="(item, i) in otherBooks" :key="i">
              <div v-if="i < 4" >
                  <img class="customImage" v-bind:src="item.images[0]">
                  <div style="font-size: 18px; font-weight: bold; margin-top: 10px; text-align: left;">{{item.title}}</div>
                  <div style="font-size: 14px; font-weight: bold;text-align: left; color: rgb(116, 114, 110);">{{item.createdWho}} 지음</div>
              </div>
          </b-col>
      </b-row>
      </b-container>
      <div v-for="(item, i) in otherBooks" :key="i">
          <div v-if="i < 4">
              vdfvdf
          </div>
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
      getBooks(page, size){
          booksApi.getBooksPageSize(page, size).then(response => {

              this.otherBooks = response;
              console.log(this.otherBooks);
              for(var i = 0; i < this.otherBooks.length; i++){
                  this.otherBooks[i].shown = false;
              }

              console.log(this.otherBooks);
          }).catch(error => {
              console.log(error);
          });
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
    await this.getBooks(0,12);

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
        width: 100%;
        outline: black;
        background-size: 100%, 100%; border: 1px solid black; background-image: none;
        object-fit: cover!important;
    }
    /*.carousel-control-prev-icon {*/
    /*}*/
</style>