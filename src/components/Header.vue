<template>
    <div>
        <div id="header-info">
       
        <router-link to="/" id="headline">
            <p>BÄSTA AFFÄREN</p>
        </router-link>
        <p v-if="customer.firstName" id="namn">Inloggad som {{customer.firstName}} {{customer.lastName}}</p>
       
        <div id="medlem-kundvagn">
        <router-link to="/articles" id="produkter" class="btn" @click.native="updateArticles">
            <p>Produkter</p>
        </router-link>
        <router-link to="/register" id="medlem" class="btn">
            <p>Bli Medlem</p>
        </router-link>
        <router-link to="/sendorder" id="kundvagn" class="btn">
            <p>kundvagn {{itemsInCart}}</p>
        </router-link>
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
  },
  computed :{
      itemsInCart(){
          return this.$store.state.itemsInCart
      },
      customer(){
          return this.$store.state.currentCustomer
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
        font-family: sans-serif;

        #headline {
            margin-left: 5%;


            p {
                color: red;
                font-size: 50px;
            }
        }

        #namn {
            margin-left: auto
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