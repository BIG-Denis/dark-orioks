let theme_names = {
    1: "dark_teal"
};

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.get("theme", function (opt) {
        let theme = opt.theme;

        if (theme > 0) {
            chrome.scripting.registerContentScripts([{
                id: "content-scripts",
                matches: ["https://orioks.miet.ru/*"],
                js: ["js/main.js", "js/" + theme_names[theme] + ".js"],
                css: ["assets/css/main.css", "assets/css/" + theme_names[theme] + ".css"]
            }]);
        } else {
            chrome.scripting.registerContentScripts([{
                id: "content-scripts",
                matches: ["https://orioks.miet.ru/*"],
                js: ["js/main.js"],
                css: ["assets/css/main.css"]
            }]);
        }
    });
});
