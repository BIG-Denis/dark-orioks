function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function change_semester() {
    let ref = getElementByXpath("/html/body/div[3]/div/div[2]/div[1]/div[5]/div[1]/a");
    document.location = ref.href;
}

let select = getElementByXpath("/html/body/div[3]/div/div[2]/div[1]/div[5]/div[1]/select[1]");

if (select !== null) {
    select.style = "margin-bottom: 12px; margin-right: 5px;";
    select.onchange = change_semester;
}


let down_list = getElementByXpath("/html/body/nav/div/div[2]/ul[2]");

let li = document.createElement("li");
li.innerHTML = '<a href="https://www.miet.ru/schedule"> Расписание';

down_list.prepend(li);
