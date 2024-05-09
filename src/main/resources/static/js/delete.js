document.getElementById("formDel").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы
    let delData = new FormData(document.getElementById("formDel"));
    fetch("/admin", {
        method: "DELETE",
        body: delData
    }).then(response => {
        // Обработка ответа, если необходимо
        console.log("DELETE запрос выполнен успешно");
        location.reload();
    }).catch(error => {
        console.error('Ошибка при отправке запроса:', error);
    });

});