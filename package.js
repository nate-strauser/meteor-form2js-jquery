Package.describe({
	name:"natestrauser:form2js-jquery",
    summary: "Javascript library for collecting form data with jquery wrapper",
  version: "0.1.3",
  git: "https://github.com/nate-strauser/meteor-form2js-jquery.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
    api.use('jquery', 'client');
    api.add_files([
        "lib/form2js/src/form2js.js",
        "lib/form2js/src/jquery.toObject.js",
    ], "client");
});
