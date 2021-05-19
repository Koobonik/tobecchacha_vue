<template>
  <div>
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
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
    <b-row>
      <b-col style="width: 66%">
        <b-card-text>
          지은이 : {{books.createdWho}}
        </b-card-text>
        <b-card-text>
          출판 : {{books.createdWho}}
        </b-card-text>
        <b-card-text>
          ISBN : {{books.ISBN}}
        </b-card-text>
        <b-card-text>
          {{ books.pages }}Pages, {{books.bookBinding}}, {{books.width}}cm*{{books.height}}cm*{{books.depth}}cm
        </b-card-text>
        <b-card-text>
          {{ $moment(books.createdDate).format('YYYY년MM월DD일') }} {{books.edition}} {{books.editionNumber}}쇄 {{books.price}}원
        </b-card-text>
      </b-col>
      <b-col>
        <img v-on:click="openNpayLink" alt="Vue logo" src="../../assets/npay_img.png">

      </b-col>
    </b-row>
    <hr style="border: 1px solid black">
    <b-card-text>{{books.content}}</b-card-text>
    <br>
    <b-card-text>{{books.tableOfContent}}</b-card-text>
  </div>

</template>

<script>
import * as booksApi from "@/api/books";

export default {
name: "BookDetail",
  data() {
    return {

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
        'ISBN': '',
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

</style>