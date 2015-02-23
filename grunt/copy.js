module.exports = function(grunt, options){
    return {
        js: {expand: true, cwd: 'app/js', src: ['**/*[.js]'], dest: 'dist/js'},
        directives: {expand: true, cwd: 'app/js', src: ['**/*[.html]'], dest: 'dist/js'},
        templates: {expand: true, cwd: 'app/templates', src: ['**/*[.html]'], dest: 'dist/'},
        views: {expand: true, cwd: 'app/views', src: ['**/*[.html]'], dest: 'dist/views'},
        svg: {expand: true, cwd: 'app/svg', src: ['**/*[.svg]'], dest: 'dist/svg'},
        fonts: {expand: true, cwd: 'app/fonts', src: ['**/*'], dest: 'dist/fonts'},
        img: {expand: true, cwd: 'app/img', src: ['**/*'], dest: 'dist/img'},
    };
};