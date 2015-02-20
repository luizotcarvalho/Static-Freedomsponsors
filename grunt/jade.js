module.exports = function(grunt, options){
    return {
        options: {
            data: {
                debug: false
            },
            pretty: true
        },
        templates: {
            files: [
                {
                  cwd: "app/templates",
                  src: "**/*.jade",
                  dest: "dist",
                  expand: true,
                  ext: ".html"
                }
            ]
        },
        directives: {
            files: [
                {
                  cwd: "app/js",
                  src: "**/*.jade",
                  dest: "dist/js",
                  expand: true,
                  ext: ".html"
                }
            ]
        },
    };
};