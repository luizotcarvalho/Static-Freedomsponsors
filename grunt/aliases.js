module.exports = function (grunt, options) {

    return {
        server: [
            'clean',
            'sass',
            'copy:js',
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