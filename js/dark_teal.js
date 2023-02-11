document.head.innerHTML += '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap">';
document.head.innerHTML += '<link rel="icon" type="image/png" sizes="16x16" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABbmlDQ1BpY2MAACiRdZG9SwJxGMc/amGU4VBDRISDRYNCFEQ0lQ0uEmIGWS16ehr4ctwpIa1BS4PQELX0NvQf1Bq0FgRBEUS0tfe2hFzPqaCEPsfvng/f3/N9eO45sIeySs7omodcvqhHggHPamzN43zHxihO5piNK4a2EA6H6Bg/j1It8eC3enWuaxt9yZShgK1HeEbR9KKwTENoq6hZvCc8qGTiSeETYZ8uAwrfWnqizm8Wp+v8ZbEejSyC3erpSbdwooWVjJ4TnhD25rIlpTGP9SWuVH5lWfKwnBEMIgQJ4CFBiU2yFPFLzsvO2vsma74lCuJR5K1RRhdHmox4faKWpGtKsip6Sp4sZWvv//dpqNNT9e6uAHS/mubnGDj3oVoxzd9T06yegeMFrvNNf0H2NPsteqWpeY/BvQOXN00tcQBXuzD0rMX1eE1yyLGrKnxcQH8MBu6hd72+q8Y9508Q3ZZfdAeHRzAu9e6NP3zlaEMWB4PJAAAACXBIWXMAAAsSAAALEgHS3X78AAABlUlEQVQ4T52TzU0DQQyFvYSFEBR+xCnbQA4caYACkisSBSCKogAQ16UBCsiRSwoIVwSbIAhEvG88TgKCCyM9rROP7ednT2FxzoaVzJ4wFAbCydLnxki4E2rh0W7rCX+2ksuDCTgXTnOi7o8E/OQeaOy439jD+KVYC77ISbhgVpbCpueYfwjzyEdl2Fzx5Qa0g3K1DOzsmO12PGg6M5u9RiIvQBtmk5aoXGba/RRM4NGh2cGe2+1toW22Jd/nwmyREO0VMKA6LJwygfvylyVUqYLdk88r04q3k5iTwNWO6lT14FAd7yD7q8TKNUmCZpVydXp24ajMyEAc6SMW3El6uKgbaxf+Za4YQAu1vYWYTCR1neIO33xIQK9yqieoAaiiiS8N57vf6SeRGWNsl76Fj6rQ14xRVRpZZW/vXWumZk/PJttHaTZGIxiw21DOVWRR4e9Fiuowr0kQivsu0EqatfqknfTfr6vMhNSCHkR6GLE0uem0bSlQcMr0DO174UYY8SL9Na6ScAEBQpdIt+xZxnVKlJ/zF7BuqEUU+lcYAAAAAElFTkSuQmCC">';

let select1 = getElementByXpath("/html/body/div[3]/div/div[2]/div[1]/div[5]/div[1]/select[1]");
let select2 = getElementByXpath("/html/body/div[3]/div/div[2]/div[1]/div[5]/div[1]/select[2]");

if (select1 !== null && select2 !== null) {
    select1.insertAdjacentHTML('beforebegin', '&nbsp;&nbsp;&nbsp;&nbsp;');
    select2.insertAdjacentHTML('beforebegin', '&nbsp;&nbsp;&nbsp;&nbsp;');
}


// let logo = document.getElementById("logo");
// if (logo !== null) {
//     logo.src = null;
// }