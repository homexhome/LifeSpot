let session = {
    'startDate': new Date().toLocaleString(),
    'userAgent': window.navigator.userAgent,
    'userAge': 0
}


function checkUserAge() {
    if (window.sessionStorage.getItem("userAge") === null) {
        let input = parseInt(prompt("Пожалуйста, введите ваш возраст?"));
        window.sessionStorage.setItem("userAge", input);
        session.userAge = input;
    } else {
        session.userAge = parseInt(window.sessionStorage.getItem("userAge"));
    }

    if (session.userAge < 18) {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com";
    } else {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    sessionLogger();
}

function sessionLogger() {
    console.log('Начало сессии: ' + session.startDate);
    console.log('Данные клиента: ' + session.userAgent);
    console.log('Возраст пользователя: ' + session.userAge);
}




