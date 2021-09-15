<template>
  <div v-on:click="helloWorld">
    <div class="image">
      <img style="width: 100%; height: 250px;" src="../../assets/main_page_image.jpg" alt="사막">
<!--      <img style="width: 100%; height: 250px; object-fit: cover;" src="../../assets/main_image.jpg" alt="사막">-->
      <div class="text">
          <div style="text-align: left;color: black; width: 100%;letter-spacing: -2px; padding-left: 20px">
            <strong>출판<br>전시<br>교육<br>문화기획</strong>
          </div>
        <div style="align-content: end; alignment: right; flex: 2;text-align: right; padding-right: 20px">
          <div style="text-align: start; align-content: end; alignment: right; display: inline-block;">
            <div style="line-height: 20px; letter-spacing: -2px; font-size: 15px;">
              0도에서 100도<br>
              액화되고 기화되는 문화의 온도<br>
            </div>
            <div style="font-weight: bold;font-size: 25px; letter-spacing: 0px;">문화온도 <strong style="font-weight: bolder;font-size: 24px">씨도씨</strong></div>
          </div>
        </div>
<!--        <img   class="image2" src="../../assets/seedosee_moto.png">-->

      </div>
    </div>

<!--    <b-carousel-->
<!--        id="carousel-1"-->
<!--        :interval=false-->
<!--        background="#abcdef"-->
<!--        img-width="1024"-->
<!--        img-height="480"-->
<!--        style="font-weight: bold"-->
<!--        @sliding-start="onSlideStart"-->
<!--        @sliding-end="onSlideEnd"-->
<!--    >-->
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
<!--      <img style="width: 100%" src="https://seedosee.com:8082/api/file/downloadFile/c90f39f7-0909-4748-873f-dd5a71c82405main_rating_image.jpeg">-->
<!--      <b-carousel-slide img-src="https://seedosee.com:8082/api/file/downloadFile/c90f39f7-0909-4748-873f-dd5a71c82405main_rating_image.jpeg">-->
<!--        <div>-->
<!--          <div style="width: 100%; height: 100px; align-content: start; text-align: left; color: black">출판<br>전시<br>교육<br>문화기획</div>-->
<!--          <div style="float: right">-->
<!--          <div style="height: 100px; align-content: end; text-align: start; color: black">-->
<!--            0도에서 100도<br>-->
<!--            액화되고 기화되는 문화의 온도<br>-->
<!--            <div style="font-weight: normal;font-size: 24px">문화온도 <strong style="font-weight: bolder;font-size: 24px">씨도씨</strong></div>-->
<!--          </div>-->
<!--        </div>-->
<!--        </div>-->
<!--      </b-carousel-slide>-->
<!--    </b-carousel>-->

    <div style="padding-top: 30px;"></div>
    <b-card-text style="margin-bottom: 0px; text-align: start; margin-left: 20px;font-size: 24px; font-weight: bold; color: darkgrey"> Books</b-card-text>
    <div class="title-css">{{bookTitle}}</div>
    <div style="text-align: start; padding-left: 20px; margin-bottom: 10px;font-size: 16px; letter-spacing: -1.0px; color: grey">{{bookSubTitle}}</div>
    <b-carousel
            id="carousel-1"
            :interval=false
            controls
            indicators
            background="#abcdef"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;margin-left: 10px; margin-right: 10px"
            @sliding-start="onSlideStartBook"
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
    <b-card-text style="margin-bottom: 0px; text-align: start; margin-left: 20px;font-size: 24px; font-weight: bold; color: darkgrey"> Education</b-card-text>
    <div class="title-css">{{educationTitle}}</div>
    <div style="text-align: start; padding-left: 20px; margin-bottom: 10px;font-size: 16px; letter-spacing: -1.0px; color: grey">{{educationSubTitle}}</div>
    <b-carousel
            id="carousel-1"
            :interval=false
            controls
            indicators
            background="#abcdef"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;margin-left: 10px; margin-right: 10px"
            @sliding-start="onSlideStartEducation"
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
    <b-card-text style="margin-bottom: 0px; text-align: start; margin-left: 20px;font-size: 24px; font-weight: bold; color: darkgrey"> Gallery</b-card-text>
    <div class="title-css">{{galleryTitle}}</div>
    <div style="text-align: start; padding-left: 20px; margin-bottom: 10px;font-size: 16px; letter-spacing: -1.0px; color: grey">{{gallerySubTitle}}</div>
    <b-carousel
            id="carousel-1"
            :interval=false
            controls
            indicators
            background="#abcdef"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;margin-left: 10px; margin-right: 10px"
            @sliding-start="onSlideStartGallery"
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

    <div style="padding-top: 40px;"></div>
    <b-card-text style="margin-bottom: 0px; text-align: start; margin-left: 20px;font-size: 24px; font-weight: bold; color: darkgrey"> Etc</b-card-text>
    <div class="title-css">{{etcTitle}}</div>
    <div style="text-align: start; padding-left: 20px; margin-bottom: 10px;font-size: 16px; letter-spacing: -1.0px; color: grey">{{etcSubTitle}}</div>
    <b-carousel
            id="carousel-1"
            :interval=false
            controls
            indicators
            background="#abcdef"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;margin-left: 10px; margin-right: 10px"
            @sliding-start="onSlideStartEtc"
            @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
              v-for="(etc, j) in etcs"
              :key="j"
              v-bind:img-src="etc.images[0]"
      >
        <div style="height: 1000px;" v-on:click="getEtcDetailPage(etc.id)"></div>
      </b-carousel-slide>
    </b-carousel>

    <div style="padding-top: 40px;"></div>
<!--    <p class="mt-4">-->
<!--      Slide #: {{ slide }}<br>-->
<!--      Sliding: {{ sliding }}-->
<!--    </p>-->
  </div>
</template>
<style>
  .carousel-item img {
    width:100%!important ;
    height: 250px;
    object-fit: cover!important;
  }
  .image {
    text-align: right;
    position:relative;
  }

  .image .text {
/*display: flex;*/
    width: 100%;
    position:absolute;
    text-align: start;
    top:40px;
    /*left:25px;*/
    /*right: 25px;*/
  }
    .image2 {
      margin: 0 auto;
        width: 300px;
      /*align-content: end;*/
      /*position: absolute;*/
        /*position:absolute;*/
    }
    .title-css {
      text-align: start;
      padding-left: 20px;
      margin-right: 20px;
      margin-bottom: -2px;
      font-weight: bold;
      font-size: 22px;
      letter-spacing: -2.0px;
      line-height: 30px;
    }
</style>
<script>
  import * as booksApi from "../../api/books";
  import * as educationApi from "../../api/education";
  import * as galleryApi from "../../api/gallery";
  import * as etcApi from "../../api/etc";
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
      etcs: [
        'id',
        'title',
        'subTitle',
        'informationContent',
        'content',
        'images',
      ],
      mainNotice: [
              'id',
              'description',
              'image',
      ],
      bookTitle:'',
      bookSubTitle:'',
      educationTitle:'',
      educationSubTitle:'',
      galleryTitle:'',
      gallerySubTitle:'',
      etcTitle:'',
      etcSubTitle:''
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    onSlideStart(slide) {
      this.sliding = true;
      this.slide = slide;
      console.log(this.slide);
    },
    // eslint-disable-next-line no-unused-vars
    onSlideEnd(slide) {
      this.sliding = false;
      this.slide = slide;
    },
    onSlideStartBook(slide) {
      this.sliding = true;
      this.bookTitle = this.books[slide].title;
      this.bookSubTitle = this.books[slide].subTitle;
    },
    onSlideStartEducation(slide) {
      this.sliding = true;
      this.educationTitle = this.education[slide].title;
      this.educationSubTitle = this.education[slide].subTitle;
    },
    onSlideStartGallery(slide) {
      this.sliding = true;
      this.galleryTitle = this.gallery[slide].title;
      this.gallerySubTitle = this.gallery[slide].subTitle;
    },
    onSlideStartEtc(slide) {
      this.sliding = true;
      this.etcTitle = this.etcs[slide].title;
      this.etcSubTitle = this.etcs[slide].subTitle;
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
        this.bookTitle = this.books[0].title;
        this.bookSubTitle = this.books[0].subTitle;

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
        this.educationTitle = this.education[0].title;
        this.educationSubTitle = this.education[0].subTitle;
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
        this.galleryTitle = this.gallery[0].title;
        this.gallerySubTitle = this.gallery[0].subTitle;
        console.log(this.gallery);
      }).catch(error => {
        console.log(error);
      })
    },
    galleryDetailPage (id) {
      router.push(`/galleryDetail?id=${id}`);
    },

    getEtcs(page, size){
      etcApi.getEtcPageSize(page, size).then(response => {
        this.etcs = response;
        this.etcTitle = this.etcs[0].title;
        this.etcSubTitle = this.etcs[0].subTitle;
      }).catch(error => {
        console.log(error);
      });
    },
    getEtcDetailPage(id){
      router.push(`/etcDetail?id=${id}`);
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
    await this.getEtcs(0,3);
  },
}
</script>

<!--<script>-->
<!--export default {-->
<!--  name: "MainPageImageSlider"-->
<!--}-->
<!--</script>-->