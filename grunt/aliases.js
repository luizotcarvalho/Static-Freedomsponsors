module.exports = function (grunt, options) {

    return {
        server: [
            'clean',
            'sass',
            'copy:js',
            'copy:directives',
            'copy:templates',
            'copy:views',
            'copy:svg',
            'copy:fonts',
            'copy:img',
            'bower',
            'tags',
            'styledown',
            'connect:livereload',
            'open',
            'watch'
        ],

        build: [

        ],

        deploy: [

        ]
    };

}