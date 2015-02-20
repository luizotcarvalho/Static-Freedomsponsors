module.exports = function(grunt, options){
    return {
        dev: {
            options: {
                keepalive: true,
                port: 4567,
                base: 'dist/',
                hostname: 'localhost'
            }
        }
    };
};