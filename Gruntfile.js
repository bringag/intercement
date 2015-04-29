module.exports = function( grunt ) {

    grunt.initConfig({
        
        //sass
        sass: {                             
            dist: {                          
                options: {                       
                    style: 'expanded'
                },
                files: {
                    'build/css/all.css': 'src/styles/main.scss',
                    'build/css/all.min.css': 'src/styles/main.scss'

                }
            }
        },
        //sass

        // uglify
        uglify : {
            options : {
                mangle : false
            },

            my_target : {
                files : {
                    'build/js/all.min.js' : [ 'src/scripts/plugins.js', 'src/scripts/main.js' ]
                }
            }
        },
        // uglify
        
        // strip comments
        comments: {
            js: {
                options: {
                    singleline: true,
                    multiline: true
                },
                src: [ 'build/js/all.min.js' ]
            },
            css: {
                options: {
                    singleline: true,
                    multiline: true
                },
                src: [ 'build/css/all.min.css' ]
            }
        },
        // strip comments

        // watch
        watch : {
            dist : {
                files : [
                    'src/styles/**/*',
                    'src/scripts/**/*'
                ],

                tasks : [ 
                    'sass', 
                    'uglify', 
                    'comments' 
                ],
                options: {
                    livereload: true,
                },
            }
        }
        // watch

    });

    // Plugins do Grunt
    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-stripcomments' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );


    // Tarefas que serão executadas
    grunt.registerTask( 'default', [ 'sass', 'uglify', 'comments' ] );

    // Tarefa para Watch
    grunt.registerTask( 'w', [ 'watch' ] );

};
