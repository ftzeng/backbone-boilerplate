module.exports = function(grunt) {

	// Configuration
	// =======================================
	grunt.initConfig({

		// Watch
		watch: {
			files: ['vendor/**/*', 'app/**/*', 'data/**/*'],
			tasks: 'coffee, sass'
		},

		// Compile CoffeeScript
		// We only need to compile the main script, since, in dev,
		// the other coffeescripts will be compiled on the fly.
		coffee: {
			compile: {
				'app/main.js': 'app/main.coffee'
			}
		}

		// Compile SASS/SCSS
		// Since all other stylesheets are @import-ed in index.scss,
		// that's the only one we need to compile.
		sass: {
			files: {
				'app/styles/index.css': 'app/styles/index.scss'	
			}
		},

		// Compile Jade
		// http://goo.gl/eoSwR
		jade: {
			compile: {
				options: {
					pretty: true
				},
				files: grunt.file.expandMapping(['**/*.jade'], 'dist/', {
					cwd: 'app/templates',
					rename: function(destBase, destPath) {
						return destBase + destPath.replace(/\.jade$/, '.html');
					}
				}
			}
		}

	});

	// Define grunt tasks
	// =======================================
	grunt.registerTask('default', ['watch']);

	// Load grunt packages
	// =======================================
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jade');

};