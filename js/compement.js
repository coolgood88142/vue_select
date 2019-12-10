let counties = [
    { text: '台北市', value: 0 },
    { text: '基隆市', value: 1 }
];

let districts = [
    [
        { text: '中正區', value: 100 }, { text: '大同區', value: 103 }, { text: '中山區', value: 104 }, { text: '松山區', value: 105 },
        { text: '大安區', value: 106 }, { text: '萬華區', value: 108 }, { text: '信義區', value: 110 }, { text: '士林區', value: 111 },
        { text: '北投區', value: 112 }, { text: '內湖區', value: 114 }, { text: '南港區', value: 115 }, { text: '文山區', value: 116 },
        // {
        //     text: ["中正區", "大同區", "中山區", "松山區", "大安區", "萬華區", "信義區", "士林區", "北投區", "內湖區", "南港區", "文山區"],
        //     value: ["100", "103", "104", "105", "106", "108", "110", "111", "112", "114", "115", "116"]
        // }
    ],
    [
        { text: '仁愛區', value: 200 }, { text: '信義區', value: 201 }, { text: '中正區', value: 202 }, { text: '中山區', value: 203 },
        { text: '安樂區', value: 204 }, { text: '暖暖區', value: 205 }, { text: '七堵區', value: 206 },
        // {
        //     text: ["仁愛區", "信義區", "中正區", "中山區", "安樂區", "暖暖區", "七堵區"],
        //     value: ["200", "201", "202", "203", "204", "205", "206"]
        // }
    ]
];

Vue.component('counties-component', {
    template: '<select name = "counties" v-on:click="onChange"><option v-for="todo in todos1" :value="todo.value">{{ todo.text }}</option></select>',
    data: function () {
        return {
            todos1: counties
        }
    },
    methods: {
        onChange(event){
            let index = event.target.value;
            this.todos2 = districts[index];
        }
    }
})

Vue.component('districts-component', {
    template: '<select name = "districts"><option v-for="todos in todos2" :value="todos.value">{{ todos.text }}</option></select>',
    data: function () {
        return {
            todos2: districts[0]
        }
    }
})




let app = new Vue({
    el: '#app'
})
