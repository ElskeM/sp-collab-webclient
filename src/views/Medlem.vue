
<template>
    <div>
        <form @submit="sendForm">
            <div id="form-div">
                <div class="form_item">
                    <label class="form-label">Förnamn</label>
                    <input type="text" v-model="firstname" placeholder="Förnamn">
                </div>
                <div class="form_item">
                    <label class="form-label">Efternamn</label>
                    <input type="text" v-model="lastname" placeholder="Efternamn">
                </div>                
                <div class="form_item">
                    <label class="form-label">Address</label>
                    <input type="text" v-model="address" placeholder="Gatuadress">
                </div>
                <div class="form_item">
                    <label class="form-label">Postnummer</label>
                    <input type="text" v-model="zipcode" placeholder="Postnummer">
                </div>
                <div class="form_item">
                    <label class="form-label">Postort</label>
                    <input type="text" v-model="city" placeholder="Stad">
                </div>
                <div class="form_item">
                    <label></label><input id="skicka-btn" type="submit" value="Skicka">
                </div>
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
            output: "",
            response: {}
        }
    },
    methods: {
        async sendForm() {
            let data = {
            firstName: this.firstname,
            lastName: this.lastname,
            address: this.address,
            zipCode: this.zipcode,
            city: this.city,
            discount: 0,
            };

            await fetch("http://localhost:8080/olfdb/Pantheon/customersweb", {
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
        font-family: sans-serif;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        line-height: 1.5;


        .form_item {
            display:flex;
            flex-direction: column;

        }

        .form_item > *{
            align-self: flex-start;
        }

        .form-label {
            font-weight: bolder;
            padding: 10px 0;
        }  

     
    }

    input {
        -webkit-appearance: none;
        width: 100%;
        max-width: 400px;
        border: 2px solid #dddddd;
        border-radius: 4px;
        background: #f9f9f9;
        padding: 0.8em;
        font-size: 0.9em;
    

    }

    #skicka-btn {
        font-family: sans-serif;
        font-weight: bolder;
        font-size: 1.1em;
        padding: 10px 10px;
        margin-top: 10px;
        width: 100px;
        background-color: red;
        color: white;
        border-radius: 3px;
        border: 2px solid rgb(145, 10, 10)
    }

</style>