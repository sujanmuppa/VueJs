let message = 'Hello Vue!';

// document.getElementById('app').innerHTML = message;

// vue 3 code 

var app = Vue.createApp({
    data() {
        return {
            message: 'Hello Vue!',
            // count : 0,
            visitor_name:"",
            visitors:[]
        }
    },
    methods:{
        sayHi: function(){
            this.message = 'Hi Vue!'
            // this.count+=1
            this.visitors.push(this.visitor_name)
            this.visitor_name = ""

        }
    },
    computed:{
        count: function(){
            return this.visitors.length
    }
    }
})

app.mount('#app')