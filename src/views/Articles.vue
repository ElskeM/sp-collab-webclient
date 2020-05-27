<template>
    <div id="container">
        <h1>Våra fantastiska produkter</h1>
        <div id="articles" >
            <div id="article" v-for="article of articles" :key="article">
                <h1>{{article.name}}</h1>
                <p>{{article.description}}</p> 
                <p>{{article.price}}</p>  
            </div> 
        </div>        
    </div>
    
</template>

<script>
export default {
    computed: {
        articles() {
            return this.$store.state.articles;
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