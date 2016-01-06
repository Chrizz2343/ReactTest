'use strict';
module.exports = function (grunt) {
   grunt.initConfig({
      browserify: {
         dist: {
            options: {
            debug: true,
            transform: ['reactify']
            },
            files: {
               // if the source file has an extension of es6 then
               // we change the name of the source file accordingly.
               // The result file's extension is always .js
               "dest/module.js": ["todo.js"]
            }
         }
      },
      watch: {
         scripts: {
            files: ["*.js"],
            tasks: ["browserify"]
         }
      }
   });

   grunt.loadNpmTasks("grunt-browserify");
   grunt.loadNpmTasks("grunt-contrib-watch");

   grunt.registerTask("default", ["watch"]);
   grunt.registerTask("build", ["browserify"]);
};