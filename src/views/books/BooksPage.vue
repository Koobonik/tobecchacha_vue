<template>
  <b-container class="bv-example-row">
    <b-col>
      <b-row v-for="item in books" :key="item.id" lg="6" aria-controls="overlay-background">
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
                v-bind:img-src="image"
                v-b-hover="hoverEvent"
            >
              <div v-if="shown">
                <h4>{{ item.title }}</h4>
                <h3>{{ item.createdWho }}</h3>
                <h4>{{ item.price }}원</h4>
              </div>
            </b-carousel-slide>


            <!-- Slides with custom text -->
          </b-carousel>

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
      </b-row>
    </b-col>
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
          'shown'
      ]
    }
  },
  methods: {
    hoverEvent(isHovered){
      console.log(isHovered);
      if(isHovered){
        this.opacity = 0.2;
        this.shown = true;
      }
      else {
        this.opacity = 1.0;
        this.shown = false;
      }
    },
    changeShown(item){
      console.log("바꾸니다");
      item.shown = !item.shown;
    },
    getBooks(page, size){
      booksApi.getBooksPageSize(page, size).then(response => {
        console.log('허허');

        this.books = response;
        for(var i = 0; i < this.books.length; i++){
          this.books[i].shown = false;
        }

        console.log(this.books);
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