module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            child_theme: {
                options: {
                    paths: ["css/less"],
                    yuicompress: false
                },
                files: {
                    "style.css": "css/less/style.less"
                }
            }
        },

        watch: {
            child_theme_less: {
                files: [
                    'css/less/*.less'
                ],
                tasks: ['less']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['watch']);

};