const app = Vue.createApp({
    // variable called app = object
    data() {
        // function which return a object
        return {
            firstName: "Stefania",
            lastName: "Doe",
            email: "Stefania@gmail.com",
            gender: "female",
            picture:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        };
    },
    methods: {
        async getUser() {
            const res = await fetch("https://randomuser.me/api");
            const { results } = await res.json();

            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.picture = results[0].picture.large;
        },
    },
});

app.mount("#app");
