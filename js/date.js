require('./app');

let begin_year = 1900;
let end_year = 2020;

let begin_month = 1;
let end_month = 12;

function DefaultDateData(begin, end) {
    let date_array = [];
    for (let i = begin; i < end; i++) {
        date_array.push({ text: i });
    }

    return date_array;
}

let app = new Vue({
    el: '#app',
    data: {
        message: 'Vue練習:',
        years: DefaultDateData(begin_year, end_year),
        months: DefaultDateData(begin_month, end_month+1),
        days: '',
        years_selected: '',
        months_selected: '',
        days_selected: ''
    },
    methods: {
        clearOptions: function () {
            this.months_selected = '';
            this.days = '';
            this.days_selected = '';
        },
        onChange: function () {
            this.days_selected = '';
            let year = this.years[this.years_selected].text;
            let month = this.months[this.months_selected].text;

            this.days = new Date(year, month, 0).getDate()
        }
    }
})