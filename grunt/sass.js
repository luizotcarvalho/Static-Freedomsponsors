// Compile scss to css
module.exports = function(grunt, options){
    return {
        options: {
            includePaths: [
                'bower_components/compass-mixins/lib'
            ],
            sourceMap: true
        },
        all: {
            files: {
                'dist/css/freedomsponsors.css': 'app/scss/freedomsponsors.scss'
            },
            outputStyle: 'expanded'
        }
    };
};