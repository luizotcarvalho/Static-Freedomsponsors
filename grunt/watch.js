module.exports = function(grunt, options){
    return {
        options: {
            livereload: true,
            interrupt: true,
            event: ['changed', 'added', 'deleted']
        },
        sass: {
            files: ['app/scss/**/*.scss'],
            tasks: ['sass', 'styledown'],
            options: {
                nospawn: true
            }
        },
        js: {
            files: ['app/js/**/[*.js]'],
            tasks: ['newer:copy:js', 'tags'],
            options: {
                nospawn: true
            }
        },
        directives: {
            files: ['app/js/**/*.jade'],
            tasks: ['newer:jade:directives'],
            options: {
                nospawn: true
            }
        },
        templates: {
            files: ['app/templates/**/*.jade'],
            tasks: ['newer:jade:templates'],
            options: {
                nospawn: true
            }
        }
    };
};