<template>
<div id="container">
    <div id="msg">
        <h1>Tack!</h1>
        <p>Din order är skickad till:</p>
        <p>{{customer.address}}</p>
        <p>{{customer.zipCode}} {{customer.city}}</p>
      
    </div>
</div>
</template>

<script>

export default {

    computed: {
        customer(){
            return this.$store.state.currentCustomer
        }
    }

    
}
</script>


<style scoped lang="scss">
    #container {
        display:flex;
        align-items: center;
        justify-content: center;
         font-family: sans-serif;
         margin-top: 50px
    }

</style>