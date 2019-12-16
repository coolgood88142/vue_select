let months = [
    { text: 1, value: 0 }, { text: 2, value: 1 },
    { text: 3, value: 2 }, { text: 4, value: 3 },
    { text: 5, value: 4 }, { text: 6, value: 5 },
    { text: 7, value: 6 }, { text: 8, value: 7 },
    { text: 9, value: 8 }, { text: 10, value: 9 },
    { text: 11, value: 10 }, { text: 12, value: 11 },
];

let day1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28
];

let day2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
];

let day3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
];


let days = [
    day3, day1, day3, day2, day3, day2, day3, day3, day2, day3, day2, day3
];

Vue.component('ch_days', {
    props: ['days'],
    template: '#day'
});

let app = new Vue({
    el: '#app',
    data: {
        message: 'Vue練習:',
        year_text: '',
        months: months,
        days: days[0],
        month_selected: 0,
        day_selected: 1
    },
    methods: {
        onKeyup: function(){
            this.month_selected = 0;
            this.days =  days[0];
            this.day_selected = 1;
        },
        onChange: function () {
            this.days = days[this.month_selected];
            this.day_selected = 1;
            let yaer = this.year_text;
            if (yaer != '' && yaer != undefined){
                if (yaer % 2 == 0 && this.month_selected == 1) {
                    if (this.days.length < 29){
                        this.days.push(29);
                    }
                }else{
                    if (this.days.length == 29){
                        this.days.splice(this.days.length-1, 1);
                    }
                }
            }else{
                alert('請輸入年份!');
                this.onKeyup();
            }
        }
    }
})