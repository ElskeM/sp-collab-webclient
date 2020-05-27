<template>
    <div id="container">
        <h1>Våra fantastiska produkter</h1>
        <div id="articles" >
            <div id="article" v-for="(article, index) of articles" :key="index">
                <h1>{{article.name}}</h1>
                <p>{{article.description}}</p> 
                <p>{{article.price}}</p>  
                <p>{{article.artNr}}</p>
                <button value="add to cart" @click="addToCart(article.artNr, article.name)">Lägg i kundvagn</button>
            </div> 
        </div>        
    </div>
    
</template>

<script>
export default {
    computed: {
        articles() {
            return this.$store.state.articles;
        },
    },

    methods : {
    addToCart(artNr, name) {
        this.$store.commit("addArticleToCart", [artNr, name])
        this.$store.commit("addItemToCart")
        console.log(this.$store.state.cart)
            
        }
    }

    
}
</script>

<style lang="scss" scoped>

#articles {
    display:flex;
    flex-wrap: wrap;
    justify-content: center;

    #article {
        margin: 1em;
        padding: 1em;
        background-color: red;
        width: 200px;
        border-radius: 3px;
        border: 3px solid black;
    }
}
</style>