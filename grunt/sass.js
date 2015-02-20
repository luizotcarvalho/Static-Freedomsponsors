// Compile scss to css
module.exports = function(grunt, options){
    return {
        options: {
            includePaths: [
                'bower_components/foundation/scss'
            ],
            outputStyle: 'expanded',
            sourceMap: true
        },
        all: {
            files: {
                'dist/css/freedomsponsors.css': 'app/scss/freedomsponsors.scss'
            }
        }
    };
};