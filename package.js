Package.describe({
  name: 'polguixe:meteor-ge-2dui',
  version: '4.4.3',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  //Dependencies
  api.addFiles([
    "dependencies/classy.js",
    "dependencies/hammer.js",
    "dependencies/jgestures.min.js",
    "dependencies/jquery.hotkeys.js",
    "dependencies/jquery.mousewheel.js",
    "dependencies/signals.js"
  ], 'client');

  //lib
  api.addFiles([
    "lib/InputAPI.js",
    "lib/InputGamepadPlugin.js",
    "lib/InputState.js",
    "lib/InputTouchPlugin.js"
  ],'client');
  api.export("InputAPI");
  api.export("IInputPlugin");
  api.export("IInputEvent");
  api.export("InputState");
  api.export("InputEventTouch");
  api.export("InputGamepadPlugin");

});
