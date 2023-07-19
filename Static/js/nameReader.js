function nameFunction(event) {
    if (event.key === "Enter") {
        let userName = event.target.value;
        alert(`Приветствуем, ${userName}. В вашем имени ${userName.length} символов`);
        // Дополнительные действия после ввода и нажатия Enter
    }
}