module.exports = function(grunt){
  grunt.initConfig({
    jshint: {
      all:{
        src:['Gruntfile.js', 'app/**/*.js'],
      },
      options: {
        curly:true,
        eqeqeq:true,
        browser:true,
        globals: {
          jQuery:true,
          Calculator:true,
          afterEach:true,
          after:true,
          beforeEach:true,
          before:true,
          describe:true,
          it:true,
          expect:true,
          console:true
        }
      },
//      mocha: {
//        all: {
//          src: ['*.html', 'tests/**/*.html'],
//          options: {
//            mocha: {
//              ignoreLeaks: false
//            },
//            run:true
//          }
//        }
//      },
      watch: {
          files:{ src:['app/**/*.js']},
//          tasks:['jshint', 'mocha']
			tasks:['jshint']
      }
    }
  });
grunt.loadNpmTasks('grunt-contrib-jshint');
//grunt.loadNpmTasks('grunt-mocha');
grunt.loadNpmTasks('grunt-contrib-watch');

//grunt.registerTask('default',['jshint','mocha']);
grunt.registerTask('default',['jshint']);
};

