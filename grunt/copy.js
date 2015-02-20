module.exports = function(grunt, options){
    return {
        vendor: {
            files: [
                {expand: true, src: ['bower_components/*'], dest: 'dist/vendor', filter: 'isFile'},
            ]
        }
    };
};