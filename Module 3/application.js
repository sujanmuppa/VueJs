// Vue 3 component registration
const MessageBoard = {
    props:['title'],
    template: `
    <div>
        <h3>{{ title }}</h3>
        <p>Your Name: <input type="text" v-model="visitor_name"></p>
        <p>Your Message: <input type="text" v-model="visitor_message"></p>

        <p v-if="count == 0">No replies yet</p>
        <p v-else-if="count > 5">You are very popular</p>
        <p v-else>No. of replies: {{ count }}</p>

        <button v-on:click="sayHi">Say Hi</button>
        
        <ul>
            <li v-for="(message, index) in messages" :key="index">
                {{ message.visitor_name }}: {{ message.visitor_message }}
            </li>
        </ul>
    </div>
    `,
    data() {
        return {
            visitor_name: "",
            visitor_message: "",
            messages: [],
        };
    },
    methods: {
        sayHi() {
            this.messages.push({
                visitor_name: this.visitor_name,
                visitor_message: this.visitor_message
            });
            this.visitor_name = "";
            this.visitor_message = "";
            this.$emit('add-to-global-count');
        }
    },
    computed: {
        count() {
            return this.messages.length;
        }
    }
};

// Create the Vue app and register the component
const app = Vue.createApp({
    components: {
        'message-board': MessageBoard
    },
    data() {
        return {
            global_count: 0,
        };
    },
    methods: {
        count_global() {
            this.global_count++;
        }
    },
    // beforeCreate is called before the instance is created, its scope is not available yet
    beforeCreate() {
        console.log("beforeCreate");
        console.log(this.global_count);
    },
    // created is called after the instance is created, its scope is available untill data of that instance
    created() {
        console.log("created");
        console.log(this.global_count);
    },
    beforeMount() {
        console.log("beforeMount");
        console.log(this.app);
    },
    mounted() {
        console.log("mounted");
        console.log(this.app);
    },
    beforeUpdate() {
        console.log("beforeUpdate");
        console.log(this.global_count);
    },
    updated() {
        console.log("updated");
        console.log(this.global_count);
    },
    beforeUnmount() {
        console.log("beforeUnmount");
        console.log(this.global_count);
    },
    unmounted() {
        console.log("unmounted");
        console.log(this.global_count);
    }

});

app.mount('#app');
