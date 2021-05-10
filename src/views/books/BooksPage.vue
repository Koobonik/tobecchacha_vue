<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col lg="6" aria-controls="overlay-background">
        <div v-for="item in books" :key="item.id">
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
                :key="image"
                v-for="image in item.images"
                caption="First slide"
                text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                v-bind:img-src="image"
            ></b-carousel-slide>


            <!-- Slides with custom text -->
          </b-carousel>
          <div>{{ item.title }}</div>
        </div>

<!--        <b-form-group label="Variant" label-for="bg-variant" label-cols-sm="4" label-cols-lg="12">-->
<!--          <b-form-select id="bg-variant" v-model="variant" :options="variants"></b-form-select>-->
<!--        </b-form-group>-->

<!--        <b-form-group label="Opacity" label-for="bg-opacity" label-cols-sm="4" label-cols-lg="12">-->
<!--          <b-input-group>-->
<!--            <b-form-input-->
<!--                id="bg-opacity"-->
<!--                v-model="opacity"-->
<!--                type="range"-->
<!--                number-->
<!--                min="0"-->
<!--                max="1"-->
<!--                step="0.01"-->
<!--            ></b-form-input>-->
<!--            <b-input-group-append is-text class="text-monospace">-->
<!--              {{ opacity.toFixed(2) }}-->
<!--            </b-input-group-append>-->
<!--          </b-input-group>-->
<!--        </b-form-group>-->

<!--        <b-form-group label="Blur" label-for="bg-blur" label-cols-sm="4" label-cols-lg="12">-->
<!--          <b-form-select id="bg-blur" v-model="blur" :options="blurs"></b-form-select>-->
<!--        </b-form-group>-->
<!--      </b-col>-->

<!--      <b-col lg="6" >-->
<!--        <b-overlay-->
<!--            v-b-hover="hoverEvent"-->
<!--            id="overlay-background"-->
<!--            show-->
<!--            :variant="variant"-->
<!--            :opacity="opacity"-->
<!--            :blur="blur"-->
<!--            rounded="sm"-->
<!--        >-->
<!--          <b-card title="Card with overlay" aria-hidden="true">-->
<!--            <b-card-text>-->
<!--              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor-->
<!--              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud-->
<!--              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.-->
<!--            </b-card-text>-->

<!--            <b-button disabled variant="primary">Button</b-button>-->
<!--          </b-card>-->
<!--        </b-overlay>-->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import * as booksApi from "@/api/books";
export default {
name: "BooksPage",
  data() {
    return {
      shown: false,
      variant: 'light',
      opacity: 0.85,
      blur: '2px',
      variants: [
        'transparent',
        'white',
        'light',
        'dark',
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
      ],
      blurs: [
        { text: 'None', value: '' },
        '1px',
        '2px',
        '5px',
        '0.5em',
        '1rem'
      ],
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
      ]
    }
  },
  methods: {
    hoverEvent(isHovered){
      if(isHovered){
        this.opacity = 0.2;
        this.shown = true;
      }
      else {
        this.opacity = 1.0;
        this.shown = false;
      }
      console.log("asdasd");
    },
    getBooks(page, size){
      booksApi.getBooksPageSize(page, size).then(response => {
        console.log('허허');

        this.books = response;

        console.log(this.books[0].images.length);
      }).catch(error => {
        console.log(error);
      })
    }

  },
  async created() {
    await this.getBooks(0, 10);

  }
}
</script>

<style scoped>

</style>