module.exports = function(grunt, options){
    return {
        app: {
            options: {
                scriptTemplate: '<script src="{{ path.replace("../app/","") }}"></script>',
                linkTemplate: '<link href="{{ path.replace("../app/","") }}"/>',
                openTag: '<!--app tags-->',
                closeTag: '<!--end app tags-->'
            },
            src: [
                'app/js/plugins.js',
                'app/js/plugins/**/*.js',
                'app/js/get-shit-done.js',
                'app/js/app.js',
                'app/js/**/*.js'
            ],
            dest: 'dist/index.html'
        }
    };
};