<template>
  <div v-on:click="helloWorld">
    <b-carousel
        id="carousel-1"
        :interval=false
        background="#abcdef"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
<!--      <b-carousel-slide-->
<!--          caption="First slide"-->
<!--          text="Nulla vitae elit libero, a pharetra augue mollis interdum."-->
<!--          img-src="https://picsum.photos/1024/480/?image=52"-->
<!--      ></b-carousel-slide>-->


<!--      &lt;!&ndash; Slides with custom text &ndash;&gt;-->
<!--      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">-->
<!--        <h1>Hello world!</h1>-->
<!--      </b-carousel-slide>-->

<!--      &lt;!&ndash; Slides with image only &ndash;&gt;-->
<!--      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>-->

<!--      &lt;!&ndash; Slides with img slot &ndash;&gt;-->
<!--      &lt;!&ndash; Note the classes .d-block and .img-fluid to prevent browser default image alignment &ndash;&gt;-->
<!--      <b-carousel-slide>-->
<!--        <template #img>-->
<!--          <img-->
<!--              class="d-block img-fluid w-100"-->
<!--              width="1024"-->
<!--              height="480"-->
<!--              src="https://picsum.photos/1024/480/?image=55"-->
<!--              alt="image slot"-->
<!--          >-->
<!--        </template>-->
<!--      </b-carousel-slide>-->

<!--      &lt;!&ndash; Slide with blank fluid image to maintain slide aspect ratio &ndash;&gt;-->
<!--      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">-->
<!--        <p>-->
<!--          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt-->
<!--          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.-->
<!--        </p>-->
<!--      </b-carousel-slide>-->

<!--      <b-carousel-slide-->
<!--              v-for="(notice, j) in mainNotice"-->
<!--              :key="j"-->
<!--              v-bind:img-src="notice.image"-->
<!--      >-->
<!--      </b-carousel-slide>-->
      <b-carousel-slide img-src="https://seedosee.com:8082/api/file/downloadFile/07dc7e62-8153-47ab-bb0e-17e886f9a405main_page_image.jpg">
        <div>
          <div style="width: 100%; height: 100px; align-content: start; text-align: left; color: black">출판<br>전시<br>교육<br>문화기획</div>
          <div style="width: 100%; height: 100px; align-content: center; text-align: right; color: black">
            출ㅁㄴㅇ판<br>전시<br>교육<br>문화기획
          </div>
        </div>
      </b-carousel-slide>
    </b-carousel>

    <div style="padding-top: 40px;"></div>
    <b-card-text style="text-align: start; margin-left: 20px"><img style="height: 40px" alt="Vue logo" src="../../assets/icons/icons8-read-100.png"> Books</b-card-text>
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
              v-for="(book, j) in books"
              :key="j"
              v-bind:img-src="book.images[0]"
      >
        <div style="height: 1000px;" v-on:click="bookDetailPage(book.id)"></div>
      </b-carousel-slide>
    </b-carousel>

    <div style="padding-top: 40px;"></div>
    <b-card-text style="text-align: start; margin-left: 20px"><img style="height: 40px" alt="Vue logo" src="../../assets/icons/icons8-tuition-90.png"> Education</b-card-text>
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
              v-for="(book, j) in education"
              :key="j"
              v-bind:img-src="book.images[0]"
      >
        <div style="height: 1000px;" v-on:click="educationDetailPage(book.id)"></div>
      </b-carousel-slide>
    </b-carousel>

    <div style="padding-top: 40px;"></div>
    <b-card-text style="text-align: start; margin-left: 20px"><img style="height: 40px" alt="Vue logo" src="../../assets/icons/icons8-photo-gallery-96.png"> Gallery</b-card-text>
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
              v-for="(book, j) in gallery"
              :key="j"
              v-bind:img-src="book.images[0]"
      >
        <div style="height: 1000px;" v-on:click="galleryDetailPage(book.id)"></div>
      </b-carousel-slide>
    </b-carousel>
<!--    <p class="mt-4">-->
<!--      Slide #: {{ slide }}<br>-->
<!--      Sliding: {{ sliding }}-->
<!--    </p>-->
  </div>
</template>
<style>
  .carousel-item img {
    width:100%!important ;
    height: 400px;
    object-fit: cover!important;
  }
</style>
<script>
  import * as booksApi from "../../api/books";
  import * as educationApi from "../../api/education";
  import * as galleryApi from "../../api/gallery";
  import * as mainNoticeApi from "../../api/mainNotice";
  import router from "../../router";
export default {
  name: "MainPageImageSlider",
  data() {
    return {
      slide: 0,
      sliding: null,
      books: [
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
      ],
      education: [
        'id',
        'price',
        'title',
        'content',
        'withWho',
        'images',
        'introduction',
        'shown',
      ],
      gallery: [
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
      ],
      mainNotice: [
              'id',
              'description',
              'image',
      ]
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    onSlideStart(slide) {
      this.sliding = true;
      this.slide = slide;
    },
    // eslint-disable-next-line no-unused-vars
    onSlideEnd(slide) {
      this.sliding = false;
      this.slide = slide;
    },
    helloWorld(){
      console.log(this.slide);
    },
    getBooks(page, size){
      booksApi.getBooksPageSize(page, size).then(response => {

        this.books = response;
        console.log(this.books);
        for(var i = 0; i < this.books.length; i++){
          this.books[i].shown = false;
        }

        console.log(this.books);
      }).catch(error => {
        console.log(error);
      });
    },
    bookDetailPage (id) {
      console.log("asdasd");
      router.push(`/bookDetail?id=${id}`);
    },
    getEducation(page, size){
      educationApi.getEducationPageSize(page, size).then(response => {
        console.log('허허');

        this.education = response;
        for(var i = 0; i < this.education.length; i++){
          this.education[i].shown = false;
        }
        console.log(this.education);
      }).catch(error => {
        console.log(error);
      })
    },
    educationDetailPage (id) {
      console.log("asdasd");
      router.push(`/educationDetail?id=${id}`);
    },
    getGallery(page, size){
      galleryApi.getGalleryPageSize(page, size).then(response => {
        console.log('허허');

        this.gallery = response;
        for(var i = 0; i < this.gallery.length; i++){
          this.gallery[i].shown = false;
        }

        console.log(this.gallery);
      }).catch(error => {
        console.log(error);
      })
    },
    galleryDetailPage (id) {
      router.push(`/galleryDetail?id=${id}`);
    },
    getMainNotice(page, size){
      mainNoticeApi.getMainNoticePageSize(page, size).then(response => {
        this.mainNotice = response;
        console.log(this.mainNotice);
      }).catch(error => {
        console.log(error);
      })
    }
  },
  async created() {
    await this.getBooks(0, 3);
    await this.getEducation(0,3);
    await this.getGallery(0,3);
    await this.getMainNotice(0, 10);
  },
}
</script>

<!--<script>-->
<!--export default {-->
<!--  name: "MainPageImageSlider"-->
<!--}-->
<!--</script>-->