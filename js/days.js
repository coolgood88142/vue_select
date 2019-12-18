let years = [
    { text: 100, value: 0 }, { text: 101, value: 1 },
    { text: 102, value: 2 }, { text: 103, value: 3 },
    { text: 104, value: 4 }, { text: 105, value: 5 },
    { text: 106, value: 6 }, { text: 107, value: 7 },
    { text: 108, value: 8 }, { text: 109, value: 9 },
    { text: 110, value: 10 }
]

let months = [
    { text: 1, value: 31 }, { text: 2, value: 28 },
    { text: 3, value: 31 }, { text: 4, value: 30 },
    { text: 5, value: 31 }, { text: 6, value: 30 },
    { text: 7, value: 31 }, { text: 8, value: 31 },
    { text: 9, value: 30 }, { text: 10, value: 31 },
    { text: 11, value: 30 }, { text: 12, value: 31 },
];

let day1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];

let day2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

let day3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


let days = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
];

Vue.component('days', {
    props: ['days'],
    template: '#day'
});

let app = new Vue({
    el: '#app',
    data: {
        message: 'Vue練習:',
        years: years,
        months: months,
        days: 31,
        years_selected: 0,
        months_selected: 31
    },
    computed: {
        days: function () {
            let day_array = [];
            for (i = 1; i < this.days+1; i++) {
                day_array.push(i)
            }

            return day_array;
        }
    },
    methods: {
        onChange: function () {
            this.days = this.months_selected;
            if (this.years_selected % 2 == 0){
                //要怎麼執行
                days(this.days);
                // if (yaer % 2 == 0 && this.month_selected == 1) {
                //     if (this.days.length < 29){
                //         this.days.push(29);
                //     }
                // }else{
                //     if (this.days.length == 29){
                //         this.days.splice(this.days.length-1, 1);
                //     }
                // }
            }
        }
    }
})