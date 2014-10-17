module.exports = {
    open: function (url, type) {
        cordova.exec(null, null, "FileOpener", "open", [url, type]);
    }
};
