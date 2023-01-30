

document.head.innerHTML += '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap">';


let selects = document.querySelectorAll('select.input-sm');
if (selects.length > 0) {
    let select1 = selects[0];
    select1.insertAdjacentHTML('beforebegin', '&nbsp;&nbsp;&nbsp;&nbsp;');
    selects[1].insertAdjacentHTML('beforebegin', '&nbsp;&nbsp;&nbsp;&nbsp;');
    select1.style = "margin-bottom: 12px; margin-right: 5px;";
    function work_with_select1() {
        let select_ref = document.querySelectorAll('div.well.ng-binding a')[1];
        document.location = select_ref.href;
    }
    select1.onchange = work_with_select1;
}
