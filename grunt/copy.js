module.exports = function(grunt, options){
    return {
        js: {expand: true, cwd: 'app/js', src: ['**/*[.js,.html]'], dest: 'dist/js'},
    };
};