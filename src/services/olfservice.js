

//http://localhost:8080/olfdb/Pantheon/orders

export default {

    async getArticles() {
        let response = await fetch("http://localhost:8080/olfdb/Pantheon/articles");
        return await response.json();
    }



}