requirejs.config({
    // baseUrl : '/js/',
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        //第三方基础库
        'vue': '/js/vue',
        'index': '/html/index/js/index',
        'base-com': '/com/base-com',
        'title-com': '/com/title-com',
    }
})