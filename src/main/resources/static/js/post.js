document.getElementById("formPost").addEventListener("submit", function(event) {
    event.preventDefault();
    var file = (document.getElementById("data_img")).files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
        const base64String = event.target.result.split(',')[1];
        console.log(base64String);
        let formData = new FormData(document.getElementById("formPost"));
        formData.append("imgBase64",base64String);
        for (const value of formData.values()) {
            console.log(value);
        }
        fetch("/admin", {
            method: "POST",
            body: formData
        }).then(response => {
            console.log("POST запрос выполнен успешно");
        }).catch(error => {
            console.error('Ошибка при отправке запроса:', error);
        });

    };
    reader.readAsDataURL(file);
    event.target.reset();
});