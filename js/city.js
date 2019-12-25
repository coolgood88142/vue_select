let counties = [
    { text: '台北市', value: 0 },
    { text: '基隆市', value: 1 },
    { text: '新北市', value: 2 }
];

let districts = [
    [
        { text: '中正區', value: 100 }, { text: '大同區', value: 103 }, { text: '中山區', value: 104 }, { text: '松山區', value: 105 },
        { text: '大安區', value: 106 }, { text: '萬華區', value: 108 }, { text: '信義區', value: 110 }, { text: '士林區', value: 111 },
        { text: '北投區', value: 112 }, { text: '內湖區', value: 114 }, { text: '南港區', value: 115 }, { text: '文山區', value: 116 }
    ],
    [
        { text: '仁愛區', value: 200 }, { text: '信義區', value: 201 }, { text: '中正區', value: 202 }, { text: '中山區', value: 203 },
        { text: '安樂區', value: 204 }, { text: '暖暖區', value: 205 }, { text: '七堵區', value: 206 }
    ],
    [
        { text: '萬里區', value: 207 }, { text: '金山區', value: 208 }, { text: '板橋區', value: 220 }, { text: '汐止區', value: 221 },
        { text: '深坑區', value: 222 }, { text: '石碇區', value: 223 }, { text: '瑞芳區', value: 224 }, { text: '平溪區', value: 226 },
        { text: '雙溪區', value: 227 }, { text: '貢寮區', value: 228 }, { text: '新店區', value: 231 }, { text: '坪林區', value: 232 },
        { text: '烏來區', value: 233 }, { text: '永和區', value: 234 }, { text: '中和區', value: 235 }, { text: '土城區', value: 236 },
        { text: '三峽區', value: 237 }, { text: '樹林區', value: 238 }, { text: '鶯歌區', value: 239 }, { text: '三重區', value: 241 },
        { text: '新莊區', value: 242 }, { text: '泰山區', value: 243 }, { text: '林口區', value: 244 }, { text: '蘆洲區', value: 247 },
        { text: '五股區', value: 248 }, { text: '八里區', value: 249 }, { text: '淡水區', value: 251 }, { text: '三芝區', value: 252 },
        { text: '石門區', value: 253 }
    ]
];

Vue.component('counties_select', {
    props: {
        counties_array: {
            type: Array,
            required: true
        },
        counties_selected: {
            type: String
        },
        UpdateDistricts :{
            type: Function
        }
    },
    template: '<select v-model="counties_selected" id="counties" @change="UpdateDistricts">' +
        '<option value="" disabled selected>--請選擇--</option>' +
        '<option v-for="counties in counties_array" :value="counties.value">{{ counties.text }}</option>' +
        '</select>'
})

Vue.component('districts_select', {
    props: {
        districts_array: {
            type: Array,
            required: true
        },
        districts_selected: {
            type: String
        }
    },
    template: '<select v-model="districts_selected" id="districts">'+
        '<option value="" disabled selected>--請選擇--</option>'+
        '<option v-for="districts in districts_array" :value="districts.value">{{ districts.text }}</option>'+
        '</select>'
})

let app = new Vue({
    el: '#app',
    data:{
        message: 'Vue練習:',
        counties_array: counties,
        districts_array: '',
        counties_selected: '',
        districts_selected: ''
    },
    methods: {
        UpdateDistricts:function(){
            this.districts_array = districts[this.counties_selected];
        }
    }
})
