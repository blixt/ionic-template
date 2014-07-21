Ionic Project Template
======================

A straight-forward Git repository to easily set up a working Ionic project
without mucking about.


Quickstart
----------

### Prerequisites

You'll need these things before you start:

* Node.js: http://nodejs.org/
* Ionic, Cordova, and Gulp: `npm install -g cordova gulp ionic`
* The `convert` command (provided by [ImageMagick][im])

### How to run your first mobile app

Before you can run the project, you need to install all the dependencies
of the project:

```sh
npm install
```

At this time, it might be a good idea to look at the `"ionic"` key in the
`package.json` file. There are configurations for what Cordova plugins to
install and how to resize the app icon to all the different sizes for the
mobile app. The defaults should work for now.

To test the app you can just run the normal Ionic commands:

```sh
ionic platform add ios
ionic emulate ios
```

As you work on the app, you'll want to put styles in `scss/ionic.app.scss`
and keep `gulp watch` running to update the CSS as you make changes.


What is different?
------------------

First of all, this repo should be quick and easy to set up after cloning.
One thing I noticed when creating an Ionic project from scratch was that
it didn't really work very well for sharing code between developers. The
default project will basically check in a lot of temporary files that
shouldn't be in the repo, which will cause conflicts etc. as commits are
merged.

Second of all, this repo includes a few hooks that may prove useful to
you. One hook will ensure that plugins are reinstalled, as I found that
changing the platforms or `config.xml` file would often break my plugins.
Another hook will ensure that all the correctly sized icons are available
for each mobile platform (currently it only does Android and iOS but it's
easy to make it support more). See `package.json` for configuring these
hooks (under the `"ionic"` key).

Please submit pull requests for any improvements to the template!


Making resizing work
--------------------

For resizing images the hooks use [ImageMagick][im]. To see if it'll work
for you, try running the `convert` command on your command line. If it
doesn't work, you can find out how to install it on [their website][im].

If you're on Mac OS X, you can use [Homebrew][brew] which might be easier
to use than Ports:

```sh
brew install imagemagick
```

[brew]: http://brew.sh/
[im]: http://www.imagemagick.org/
