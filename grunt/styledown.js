// Compile documentation of css
module.exports = function(grunt, options){
    return {
        build: {
            files: {
                'dist/styleguide/index.html': ['app/styleguide/*.md']
            },
            options: {
                css: 'dist/css/freedomsponsors.css',
                js: 'dist/js/main.js',
                title: 'Styleguide Freedomsponsors'
            }
        }
    };
};