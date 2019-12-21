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

// Vue.component('days', {
//     props: ['days'],
//     template: '#day'
// });

let app = new Vue({
    el: '#app',
    data: {
        message: 'Vue練習:',
        years: years,
        months: months,
        days: 31,
        years_selected: '',
        months_selected: '',
        days_selected: ''
    },
    computed: {
        days: function () {
            let day_array = [];
            for (i = 1; i < this.days + 1; i++) {
                day_array.push(i)
            }
            
            return day_array;
        }
    },
    methods: {
        onDeault: function () {
            this.months_selected = '';
            this.days_selected = '';
        },
        onChange: function () {
            this.days = this.months_selected;
            if (this.years_selected % 2 == 0 && this.days == 28) {
                this.days+=1
            }
        }
    }
})