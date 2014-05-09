# Ghunt - Jumpstart Your Ghost Theme

**Ghunt is based on Casper and utilizes the power of Grunt & Bower to jumpstart your theme development**

Develop your new theme the way you want to. Ghunt comes with a basic layout based on Casper with normalize.css
& modernizr.js included. It's ready for you to bower install the front end framework or other assets of your choice.
Ghunt takes advantage of livereload to make the theme development process easier and it uses usemin to minify & concat
your assets to optimize your production build.

## Prerequisites
1. Node.js
2. Ghost
3. Grunt

## Download
`git clone https://github.com/danecando/ghunt.git` this repository into your /content/themes/ folder in Ghost.

## Install
Run `npm install` in the Ghunt directory to install node modules and bower dependencies.

## Configure
* Add the port your ghost blogging is running on your localhost for development in Gruntfile.js

## Usage
* Make sure your ghost blog is running before you use `grunt start` for development
* Easily add assets to your project with bower see: http://bower.io/

## Grunt Tasks
* `grunt update` - compiles scss & updates css files during development
* `grunt` - default task does the same as `grunt update`
* `grunt start` - opens your ghost blog and starts watching your files for livereload development
* `grunt build` - compile your assets and move theme files to `release` for production

## Notes
There is a bug with usemin that causes a problem with <!-- build:remove --> but it should be fixed in the next release.
Until then, before building your production release you need to manually remove the livereload script from default.hbs.

## Contribute
Ghunt's goal is to help quickly develop and deploy high quality Ghost themes. If you have any ideas or want
to contribute to this project please feel free.

## Resources
* [Ghost Themes](http://docs.ghost.org/themes/)
* [Grunt](http://gruntjs.com/)
* [Bower](http://bower.io/)