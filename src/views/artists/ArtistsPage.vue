<template>
    <div style="padding: 20px;">
<!--        <div v-for="(artist, i) in artists" :key="i">-->
<!--            <b-row style="width: 300px">-->
<!--                <b-col style="width: 300px"> <img style="width: 300px" alt="" v-bind:src="artist.image"> </b-col>-->
<!--                <b-col style="width: 300px"> <img style="width: 300px" alt="" v-bind:src="artist.image"> </b-col>-->
<!--                <b-col style="width: 300px"> <img style="width: 300px" alt="" v-bind:src="artist.image"> </b-col>-->
<!--                <b-col style="width: 300px"> <img style="width: 300px" alt="" v-bind:src="artist.image"> </b-col>-->
<!--                <b-col style="width: 300px"> <img style="width: 300px" alt="" v-bind:src="artist.image"> </b-col>-->
<!--                <b-col style="width: 300px"> <img style="width: 300px" alt="" v-bind:src="artist.image"> </b-col>-->
<!--                <b-col style="width: 300px"> <img style="width: 300px" alt="" v-bind:src="artist.image"> </b-col>-->
<!--                <b-col style="width: 300px"> <img style="width: 300px" alt="" v-bind:src="artist.image"> </b-col>-->
<!--                <b-col style="width: 300px"> <img style="width: 300px" alt="" v-bind:src="artist.image"> </b-col>-->
<!--                <b-col style="width: 300px"> <img style="width: 300px" alt="" v-bind:src="artist.image"> </b-col>-->


<!--            </b-row>-->

<!--        </div>-->

    </div>
</template>

<script>
    import * as artistsApi from "/src/api/artists";
    import router from "../../router";
    export default {
        name: "ArtistsPage",
        data(){
            return {
                artists: [
                    'id',
                    'createdDate',
                    'name',
                    'email',
                    'job',
                    'image',
                    'images',
                    'introduce',
                ]
            }
        },
        methods: {
            getArtists(page, size){
                artistsApi.getArtistsPageSize(page, size).then(response => {
                    console.log('허허');

                    this.artists = response;
                    console.log(this.artists);
                }).catch(error => {
                    console.log(error);
                })
            },
            artistsDetailPage (id) {
                console.log("asdasd");
                router.push(`/artistsDetail?id=${id}`);
            }
        },
        async created() {
            await this.getArtists(0, 10);

        },
    }
</script>

<style scoped>

</style>