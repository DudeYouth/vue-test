define(['vue'], function(Vue) {
    Vue.component('baseCom', {
        template: '<div>' +
            '<h1>{{title}}</h1>' +
            '<slot></slot>' +
            '</div>',
        props: ['title'],
        data() {
            return {};
        }
    })

})