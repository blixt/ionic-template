Ionic Project Template
======================

A straight-forward Git repository to easily set up a working Ionic project
without mucking about.


Quickstart
----------

Start by installing all dependencies:

```sh
npm install
```

If you haven't used Ionic, Cordova, or Gulp before, install them globally:

```sh
npm install -g cordova gulp ionic
```

At this time, it might be a good idea to look at the `"ionic"` key in the
`package.json` file. There are configurations for what Cordova plugins to
install and how to resize the app icon to all the different sizes for the
mobile app.

After that you can just run the normal Ionic commands:

```sh
ionic platform add ios
ionic emulate ios
```

As you work on the app, you'll want to put styles in `scss/ionic.app.scss`
and then run `gulp watch` to update the CSS as you make changes.


What is different?
------------------

First of all, this repo should be quick and easy to set up after cloning.
One thing I noticed when creating an Ionic project from scratch was that
it didn't really work very well for sharing code between developers. The
default project will basically check in a lot of temporary files that
shouldn't be in the repo, and which will cause conflicts etc. as commits
are merged.

Second of all, this repo includes a few hooks that may prove useful to
you. One hook will ensure that plugins are reinstalled, as I found that
changing the platforms or `config.xml` file would often break my plugins.
Another hook will ensure that all the correctly sized icons are available
for each mobile platform (currently it only does Android and iOS but it's
easy to make it support more). See `package.json` for configuring these
hooks (under the `"ionic"` key).

This project also only supports the SASS solution, to simplify things a
little.

Please submit pull requests for any improvements to the layout!
