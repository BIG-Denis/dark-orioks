
let theme_descs = {
    0: "Классический, чересчур яркий, скучный и всем надоевший ОРИОКС с плохо читаемым текстом и некрасивым шрифтом.",
    1: "Классика тёмных тем: стильный, чёткий, стройный, с изящными скруглёнными углами. Выбор серьёзного мужчины.",
    2: "Тёмный синеватый фон, напоминающий южное море, и приятный, как восход утреннего солнца, розовый - теперь смотреть на Африканское побержье и баллы в ОРИОКС'е можно одновременно.",
    3: "Бар - место, которым оканчивается каждая учебная неделя. Теперь он не только неоновый, но и всегда с вами, как в вашем сердце, только в ОРИОКС'е."
};


$(function() {
    chrome.storage.sync.get("theme", function (opt) {
        $("#theme").val(opt.theme ? opt.theme : 0).selected = true;
    });
    let select = $("#theme");
    let theme = select.val();
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
        $("#description").html(theme_descs[theme]);
        chrome.tabs.query({url: "https://orioks.miet.ru/*"}, function (tabs) {
            for (let i = 0; i < tabs.length; i++) {
                chrome.tabs.reload(tabs[i].id);
            }
        });
    });
});


$(function() {
    window.onload = function() {
        let select = $("#theme");
        let theme = select.val();
        $("#description").html(theme_descs[theme]);
    }
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
