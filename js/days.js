let months = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
];

let begin_year = 1990;
let end_year = 2020;

function DefaultYears(){
    let years_array = [];
    let count = 0;
    for (let i = begin_year; i < end_year+1; i++) {
        years_array.push({ text: i, value: count });
        count++;
    }
    return years_array
}

function DefaultMonths(){
    let months_array = [];
    let count = 0;
    for (let i = 0; i < months.length; i++) {
        months_array.push({ text: i+1, value: months[i] });
        count++;
    }
    return months_array
}

let app = new Vue({
    el: '#app',
    data: {
        message: 'Vue練習:',
        years: DefaultYears(),
        months: DefaultMonths(),
        days: 31,
        years_selected: '',
        months_selected: '',
        days_selected: ''
    },
    methods: {
        onDateDeault: function () {
            this.months_selected = '';
            this.days_selected = '';
        },
        onChange: function () {
            this.days_selected = '';
            this.days = this.months_selected;
            if (this.years_selected % 2 == 0 && this.months_selected == 28) {
                this.days+=1
            }
        }
    }
})