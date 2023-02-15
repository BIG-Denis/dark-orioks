
$(function() {
    chrome.storage.sync.get("theme", function (opt) {
        $("#theme").val(opt.theme ? opt.theme : 0).selected = true;
    });

    let select = $("#theme");
    select.change(function () {
        let theme = select.val();
        chrome.storage.sync.set({"theme": theme}, function() {});
        if (theme > 0) {
            let theme_names = {
                1: "dark_teal",
                2: "african_morning",
                3: "neon_bar"
            };
            chrome.scripting.updateContentScripts([{
                id: "content-scripts",
                js: ["js/main.js", "js/" + theme_names[theme] + ".js"],
                css: ["assets/css/main.css", "assets/css/" + theme_names[theme] + ".css"]
            }]);
        } else {
            chrome.scripting.updateContentScripts([{
                id: "content-scripts",
                js: ["js/main.js"],
                css: ["assets/css/main.css"]
            }]);
        }
        chrome.tabs.query({url: "https://orioks.miet.ru/*"}, function (tabs) {
            for (let i = 0; i < tabs.length; i++) {
                chrome.tabs.reload(tabs[i].id);
            }
        });
    });
});




$(function() {
    function openVK() {
        window.open('https://vk.com/unsigned_int','_blank');
    }
    
    function openGithub() {
        window.open('https://github.com/BIG-Denis/dark-orioks','_blank');
    }

    buttons = document.getElementsByClassName("logobtn");

    buttons[0].onclick = openVK;
    buttons[1].onclick = openGithub;
});