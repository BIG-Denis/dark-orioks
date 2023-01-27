
function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

document.head.innerHTML += '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap">';

let select1 = getElementByXpath("/html/body/div[3]/div/div[2]/div[1]/div[5]/div[1]/select[1]");
let select2 = getElementByXpath("/html/body/div[3]/div/div[2]/div[1]/div[5]/div[1]/select[2]");

select1.insertAdjacentHTML('beforebegin', '	&nbsp;&nbsp;&nbsp;&nbsp;');
select2.insertAdjacentHTML('beforebegin', '	&nbsp;&nbsp;&nbsp;&nbsp;');


// work with select1

select1.style = "margin-bottom: 12px; margin-right: 5px;";

function work_with_select1() {
    let select_ref = getElementByXpath("/html/body/div[3]/div/div[2]/div[1]/div[5]/div[1]/a");
    document.location = select_ref.href;
}

select1.onchange = work_with_select1;
