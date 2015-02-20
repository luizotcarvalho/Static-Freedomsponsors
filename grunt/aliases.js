module.exports = function (grunt, options) {

    return {
        server: [
            'clean',
            'sass',
            'copy:js',
            'copy:svg',
            'jade',
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