
  document.getElementById('phoneForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Чтобы страница не перезагружалась при отправке

    const phoneNumber = document.getElementById('phone').value;
    
    if (phoneNumber) {
      alert('Ваш номер телефона: ' + phoneNumber); // Можно отправить номер на сервер или использовать его по-другому
      document.getElementById('modal').style.display = 'none'; // Закрываем модальное окно после отправки
    }
  });

