let counties = [
    { text: '台北市', value: 0 },
    { text: '基隆市', value: 1 }
];

let districts = [
    [
        {
            text: ["中正區", "大同區", "中山區", "松山區", "大安區", "萬華區", "信義區", "士林區", "北投區", "內湖區", "南港區", "文山區"],
            value: ["100", "103", "104", "105", "106", "108", "110", "111", "112", "114", "115", "116"]
        }
    ],
    [
        {
            text: ["仁愛區", "信義區", "中正區", "中山區", "安樂區", "暖暖區", "七堵區"],
            value: ["200", "201", "202", "203", "204", "205", "206"]
        }
    ]
];

Vue.component('counties-component', {
    template: '<select name = "counties"><option v-for="todo in todos">{{ todo.text }}</option></select>',
    data: function () {
        return {
            todos: counties
        }
    }
})



let app = new Vue({
    el: '#app'
})
