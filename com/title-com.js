define(['vue', 'base-com'], function(Vue) {
    Vue.component('title-com', {
        template: '<base-com title="{{baseTitle}}">' +
            '<h1>{{title}}</h1>' +
            '</base-com>',
        props: ['title'],
        data() {
            return {
                baseTitle: '这是父组件的标题！'
            };
        }
    })

})