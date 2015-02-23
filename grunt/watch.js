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
            files: ['app/js/**/*.js'],
            tasks: ['newer:copy:js', 'tags']
        },
        directives: {
            files: ['app/js/**/*.html'],
            tasks: ['newer:copy:directives', 'styledown'],
            options: {
                nospawn: true
            }
        },
        templates: {
            files: ['app/templates/**/*.html'],
            tasks: ['newer:copy:templates', 'tags'],
            options: {
                nospawn: true
            }
        },
        views: {
            files: ['app/views/**/*.html'],
            tasks: ['newer:copy:views'],
            options: {
                nospawn: true
            }
        },
        svg: {
            files: ['app/svg/**/*.svg'],
            tasks: ['newer:copy:svg'],
            options: {
                nospawn: true
            }
        },
        img: {
            files: ['app/img/**/*.*'],
            tasks: ['newer:copy:img'],
            options: {
                nospawn: true
            }
        },
        bower: {
            files: ['bower_components/**/*'],
            tasks: ['bower'],
            options: {
                nospawn: true
            }
        }
    };
};