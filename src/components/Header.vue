<template>
    <div>
        <div id="header-info">
       
        <div id="headline">
            <p>BÄSTA AFFÄREN</p>
        </div>
       
        <div id="medlem-kundvagn">
        <router-link to="/articles" id="produkter" class="btn" @click.native="updateArticles">
            <p>Produkter</p>
        </router-link>
        <router-link to="/register" id="medlem" class="btn">
            <p>Bli Medlem</p>
        </router-link>
        <div id="kundvagn" class="btn">
            <p>kundvagn</p>
        </div>
        </div>

        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  methods : {
      updateArticles(){
          console.log("HEJ")
          this.$store.dispatch("updateArticles")
          console.log(this.$store.articles)
      }
  }
}
</script>




<style lang="scss">
    #header-info {
        display:flex;
        flex-direction: row;
        align-items: center;
        background-color: lightblue;

        #headline {
            margin-left: 5%;


            p {
                color: red;
                font-size: 50px;
            }
        }

        #medlem-kundvagn {
            display: flex;
            margin-left: auto;
          
        }

        .btn {
            background-color: blue;
            border-radius: 2px;
            margin: 1em;
            padding: 0em 1em;

            p {
                color: black;
            }
    
            
        }

        #kundvagn {
            background-color: grey;
            border-radius: 2px;
             margin: 1em;
            
   
        }

    }

</style>