# Ghunt - Jumpstart Your Ghost Theme

Ghunt is based on Casper and utilizes the power of Grunt & Bower to jumpstart your theme development

## Features
* Follows Ghost theme best practices
* Develop your new theme the way you want to
* Basic layout based on Casper with normalize.css & modernizr.js included
* Uses sass pre processing & autoprefixer post processing for css
* Use Bower to install a front-end framework or other assets
* live reload to make the theme development process easier
* usemin to minify & concat your assets
* imagemin & svgmin to compress images
* rev for browser caching
* Production builds follow best practice & optimized for maximum performance

## Prerequisites
1. Node.js
2. Ghost
3. Grunt

## Download
Put a fork in it or
`git clone https://github.com/danecando/ghunt.git` this repository into your /content/themes/ folder in Ghost.

## Install
Run `npm install` in the Ghunt directory to install node modules and bower dependencies.

## Configure
* Add the port your ghost blogging is running on in Gruntfile.js for development

## Usage
* Make sure your ghost blog is up and running before you use `grunt start` for development
* Easily add assets to your project with bower see: http://bower.io/

## Grunt Tasks
* `grunt update` - compiles scss & updates css files during development
* `grunt` - default task does the same as `grunt update`
* `grunt start` - opens your ghost blog and starts watching your files for livereload development
* `grunt build` - compile your assets and move theme files to `release` for production

## Suggested Project Structure
See: http://docs.ghost.org/themes/ for more information
* assets
    * css
    * fonts
    * images `post images are not revved for seo purposes`
        * background `all background images used for theme via css go here to be revved`
        * uploads / posts `should use an uploads or posts directory for non theme related images`
    * js
    * sass
* partials `.hbs theme partials go here`

All other theme files located in theme root

## Notes
* If you don't want to use sass delete the .scss file located in `assets/sass/` & work on your css files directly at `assets/css/`

## Contribute
Ghunt's goal is to help quickly develop and deploy high quality Ghost themes. If you have any ideas or want
to contribute to this project please feel free.

## Resources
* [Ghost Themes](http://docs.ghost.org/themes/)
* [Grunt](http://gruntjs.com/)
* [Bower](http://bower.io/)