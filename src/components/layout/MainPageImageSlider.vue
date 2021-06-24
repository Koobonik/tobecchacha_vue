<template>
  <div v-on:click="helloWorld">
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
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>


      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://picsum.photos/1024/480/?image=55"
              alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
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
  },
  async created() {
    await this.getBooks(0, 3);
    await this.getEducation(0,3);
    await this.getGallery(0,3);
  },
}
</script>

<!--<script>-->
<!--export default {-->
<!--  name: "MainPageImageSlider"-->
<!--}-->
<!--</script>-->