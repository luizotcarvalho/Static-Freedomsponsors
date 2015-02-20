module.exports = function(grunt, options){
    return {
        js: {expand: true, cwd: 'app/js', src: ['**/*[.js,.html]'], dest: 'dist/js'},
        svg: {expand: true, cwd: 'app/svg', src: ['**/*[.svg]'], dest: 'dist/svg'},
    };
};