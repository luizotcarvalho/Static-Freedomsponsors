module.exports = function (grunt, options) {

    return {
        server: [
            'clean',
            'sass',
            'copy:vendor',
            'styledown',
            'connect:dev',
            'open',
            // 'watch'
        ],

        build: [

        ],

        deploy: [

        ]
    };

}