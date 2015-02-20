// Live Reload
var livereloadSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt, options){
    return {
        options: {
            port: 9090,
            hostname: 'localhost'
        },
        livereload: {
            options: {
                middleware: function (connect) {
                    return [
                        livereloadSnippet,
                        mountFolder(connect, 'dist')
                    ];
                }
            }
        }
    };
};