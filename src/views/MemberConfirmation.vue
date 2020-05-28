<template>
<div id="container">
    <div id="msg">
        <h1>Tack för ditt medlemskap!</h1>
        <p>Ditt kundnummer är: {{customer.customerNr}}</p> 
    </div>
</div>
</template>

<script>

export default {

    computed: {
        customerNr(){
            return this.$store.state.currentCustomerNr
        },
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