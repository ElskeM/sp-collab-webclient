<!--<template>
    <div>
        <form action="http://localhost:8080/olfdb/Pantheon/customersweb" method="post">
            <div id="form-div">
                <label>Förnamn<input type="text" name="firstname" id="firstname" placeholder="Förnamn"></label>
                <label>Efternamn<input type="text" name="lastname" id="lastname" placeholder="Efternamn"></label>
                <label>Address<input type="text" name="address" id="address" placeholder="Adress"></label>
                <label>Postnummer<input type="text" name="zipcode" id="zipcode" placeholder="Postnr"></label>
                <label>Postort<input type="text" name="city" id="city" placeholder="Postort"></label>
                <label><input id="skicka-btn" type="submit" value="Skicka"></label>
            </div>
        
        </form>

    </div>
</template> -->




<template>
    <div>
        <form @submit="sendForm">
            <div id="form-div">
                <label>Förnamn<input type="text" v-model="firstname"></label>
                <label>Efternamn<input type="text" v-model="lastname"></label>
                <label>Address<input type="text" v-model="address"></label>
                <label>Postnummer<input type="text" v-model="zipcode"></label>
                <label>Postort<input type="text" v-model="city"></label>
                <label><input id="skicka-btn" type="submit" value="Skicka"></label>
            </div>
        
        </form>

    </div>
</template>

<script>
export default {
    data() {
        return {
            firstname: "",
            lastname: "",
            address: "",
            zipcode: "",
            city: "",
            output: ""
        }
    },
    methods: {
        sendForm() {
            let data = {
            firstName: this.firstname,
            lastName: this.lastname,
            address: this.address,
            zipCode: this.zipcode,
            city: this.city,
            discount: 0,
            };

            fetch("http://localhost:8080/olfdb/Pantheon/customersweb", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then((res) => console.log(res))
      

        }
    }
}
</script>

<style lang="scss">


    #form-div {
        display: flex;
        flex-direction: column;

        #skicka-btn {
            border-radius: 0%;
            padding: 6px;
            background-color: red;
            color: white;
        }
     
    }

</style>