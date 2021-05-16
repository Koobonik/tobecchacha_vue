<template>
  <div>asdasd</div>
</template>

<script>
import * as booksApi from "@/api/books";
export default {
name: "BooksPage",
  data() {
    return {

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
    },

  },
  async created() {
    console.log(this.$route.query.id);
    await this.getBooks(0, 10);

  }
}
</script>

<style scoped>

</style>