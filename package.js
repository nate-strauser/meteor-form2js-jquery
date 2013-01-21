Package.describe({
    summary: "Javascript library for collecting form data with jquery wrapper"
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.add_files([
        "form2js/src/form2js.js",
        "form2js/src/jquery.toObject.js",
    ], "client");
});
