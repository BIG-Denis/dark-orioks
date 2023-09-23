let theme_names = [
    "classic",
    "dark_teal",
    "african_morning",
    "neon_bar",
    "claybricks_area",
    "twilight_wizard"
];

let theme_descs = [
    "Классический, чересчур яркий, скучный и всем надоевший ОРИОКС с плохо читаемым текстом и некрасивым шрифтом.",
    "Классика тёмных тем: стильный, чёткий, стройный, с изящными скруглёнными углами. Выбор серьёзного мужчины.",
    "Тёмный синеватый фон, напоминающий южное море, и приятный, как восход утреннего солнца, розовый - теперь смотреть на Африканское побержье и баллы в ОРИОКС'е можно одновременно.",
    "Бар - место, которым оканчивается каждая учебная неделя. Теперь он не только неоновый, но и всегда с вами, как в вашем сердце, только в ОРИОКС'е.",
    "Что лучше: построить свой дом из глиняных кирпичей или хорошую карьеьру из зелёного ОРИОКС'а? А может всё сразу?",
    "Добро пожаловать в хижину волшебника, что живёт далеко в лесу. Именно здесь он колдует самые разные оценки. Надеюсь, что зелёных больше всего."
];


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
            chrome.scripting.updateContentScripts([{
                id: "content-scripts",
                js: ["js/main.js", "js/" + theme_names[theme] + ".js"],
                css: ["assets/css/main.css", "assets/css/" + theme_names[theme] + ".css"]
            }]);
        } else {
            chrome.scripting.updateContentScripts([{
                id: "content-scripts",
                js: ["js/classic.js"],
                css: ["assets/css/classic.css"]
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
    buttons = document.getElementsByClassName("logobtn");
    buttons[0].onclick = () => window.open('https://vk.com/unsigned_int','_blank');
    buttons[1].onclick = () => window.open('https://github.com/BIG-Denis/dark-orioks','_blank');
    buttons[2].onclick = () => window.open('https://gitlab.com/ChinchillaY/dark-orioks','_blank');
});
