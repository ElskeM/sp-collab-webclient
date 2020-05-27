<template>
    <div>
        <h1>Skicka din order</h1>
        <p>Din order:</p>
         <div v-for="(key, value, index) of articles" :key="index">
             <div>{{key}} st {{value}}</div>
        </div>      
        <button @click="sendOrder">Skicka in</button>
    </div>
</template>


<script>
export default {
    data(){
        return {
            articles: {},
            order: {},
            customer: {},
            orderArticles: {}
        }
    },
    computed: {
        cart() {
            return this.$store.state.cart
        },
        customerNr() {
            return this.$store.state.currentCustomerNr
        }
    },
    methods: {
        addArticles(){
            for(let article of this.cart){
                if(this.articles[article[1]]){
                    this.articles[article[1]] += 1
                }else {
                    this.articles[article[1]] = 1
                }
            }
        },
        async fetchCustomer(customerNr){
            await fetch(`http://localhost:8080/olfdb/Pantheon/customers/${customerNr}`)
            .then((customer) => customer.json())
            .then((json) => this.customer = json)

        },

        createOrderArticles(){
            for(let article of this.cart){
                if(this.orderArticles[article[0]]){
                    this.orderArticles[article[0]] += 1
                }else {
                    this.orderArticles[article[0]] = 1
                }
            }

        },

        createOrder(){
            this.order["orderDate"] = "2020-05-27",
            this.order["customer"] = this.customer,
            this.order["articles"] = this.orderArticles,
            this.order["totalDiscount"] = 0
            },

        sendOrder(){

            fetch("http://localhost:8080/olfdb/Pantheon/orders", {
                method: "POST",
                 headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.order)
            })
            .then((res) => console.log(res))
            .then(console.log(JSON.stringify(this.order)))
            .then(console.log(this.customer))

        }
    },
    mounted: function() {
         this.fetchCustomer(111)
         .then(()=> this.createOrderArticles())
         .then(()=> this.createOrder())
        
    },

    created: function() {
        this.addArticles()
    }
}
</script>

<!--
{"orderNr":2,
"orderDate":"2006-01-01",
"dispatchDate":"2006-01-01",
"customer":{
    "customerNr":116,
    "firstName":"John",
    "lastName":"Petrucci",
    "address":"Gibsongatan 12",
    "zipCode":"435 71",
    "city":"Göteborg",
    "discount":0.2
    },
"articles":{
    "10000":12,
    "10002":1
    },
"total":0.0,
"totalDiscount":0.0}
-->
