/*
 * grunt-package-environment
 * https://github.com/recipher/grunt-package-environment
 *
 * Copyright (c) 2013 Johnny Hall
 * Licensed under the MIT license.
 */

"use strict";

var PACKAGE_FILE = "package.json"
  , PACKAGE_FOLDER = "package";

module.exports = function(grunt) {
  grunt.registerTask("package", "Swap package file based on environment", function(environment) {

    if (environment == null) environment = PACKAGE_FOLDER;

    var environmentFile = environment + ".json"
      , file = grunt.file.read(PACKAGE_FOLDER + "/" + environmentFile);

    grunt.file.write(PACKAGE_FILE, file);
    grunt.log.ok("Package file swapped to " + environmentFile);
  });
};
