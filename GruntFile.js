// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: 'app/scss/**/*.scss',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    'app/css/styles.css': 'app/scss/styles.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'app/css/*.css',
                        'app/*.html',
						'app/js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './app'
                }
            }
        },
		
		cssmin: {
		  options: {
			mergeIntoShorthands: false,
			roundingPrecision: -1
		  },
		  target: {
			files: {
			  'app/css/styles.min.css': ['app/css/styles.css']
			}
		  }
		},
		
		concat_css:{
			options:{
				baseDir: 'app/css/'
			},
			files:{
				'styles.css' : ['styles.css']
			}
		},
		
		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files:{
					'app/js/main.min.js' : ['app/js/jquery.min.js', 'app/js/bootstrap.js', 'app/js/main.js']
				}
			}
		},
		
		bowercopy: {
		  options: {
			srcPrefix: 'app/bower_components'
		  },
		  scripts: {
			options: {
			  destPrefix: 'app/vendor'
			},
			files: {
			  'js/vendor/jquery/jquery.min.js': 'jquery/dist/jquery.min.js',
			  'js/vendor/angular/angular.min.js': 'angular/angular.min.js',
			  'js/vendor/angular-route/angular-route.min.js': 'angular-route/angular-route.min.js',
			  'js/vendor/angular-animate/angular-animate.js': 'angular-animate/angular-animate.js',
			  'js/vendor/ngmap/ng-map.min.js': 'ngmap/build/scripts/ng-map.min.js',
			  'css/vendor/boostrap/css/boostrap.min.css' : 'bootstrap/dist/css/bootstrap.min.css',
			  'css/vendor/components-font-awesome/css/font-awesome.min.css' : 'components-font-awesome/css/font-awesome.min.css'
			}
		  }
		}
    });	
	
    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-concat-css');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-bowercopy');
	
    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
	grunt.registerTask('minify', ['cssmin', 'uglify']);
	grunt.registerTask('bower', ['bowercopy']);
};


