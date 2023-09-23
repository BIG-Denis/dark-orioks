let theme_names = [
    "classic",
    "dark_teal",
    "african_morning",
    "neon_bar",
    "claybricks_area",
    "twilight_wizard"
];

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.get("theme", function (opt) {
        let theme = opt.theme;
        
        if (theme > 0) {
            chrome.scripting.registerContentScripts([{
                id: "content-scripts",
                matches: ["https://orioks.miet.ru/*"],
                excludeMatches: ["https://orioks.miet.ru/moodle/*"],
                js: ["js/main.js", "js/" + theme_names[theme] + ".js"],
                css: ["assets/css/main.css", "assets/css/" + theme_names[theme] + ".css"]
            }]);
        } else {
            chrome.scripting.registerContentScripts([{
                id: "content-scripts",
                matches: ["https://orioks.miet.ru/*"],
                excludeMatches: ["https://orioks.miet.ru/moodle/*"],
                js: ["js/classic.js"],
                css: ["assets/css/classic.css"]
            }]);
        }
    });
});
