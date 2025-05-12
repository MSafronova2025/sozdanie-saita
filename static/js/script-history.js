document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.subject-buttons button');
  const sections = document.querySelectorAll('.book-section');
  const searchInput = document.querySelector('#searchInput');
  const defaultSubject = 'history';
  const noResultsMessage = document.querySelector('#noResultsMessage');  // Это элемент для сообщения

  function showSection(subject) {
    sections.forEach(section => {
      section.style.display = section.dataset.subject === subject ? 'block' : 'none';
    });
    buttons.forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.subject-buttons button[data-subject="${subject}"]`);
    if (activeBtn) activeBtn.classList.add('active');
  }

  showSection(defaultSubject);

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const subject = button.dataset.subject;
      if (searchInput) searchInput.value = ""; // сбросить поиск при клике
      showSection(subject);
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const input = searchInput.value.trim().toLowerCase();
      if (!input) {
        showSection(defaultSubject);
        if (noResultsMessage) noResultsMessage.style.display = 'none';  // Скрыть сообщение
        return;
      }

      let found = false;
      sections.forEach(section => {
        const match = section.innerText.toLowerCase().includes(input);
        section.style.display = match ? 'block' : 'none';
        if (match) found = true;
      });

      // Показать или скрыть сообщение, если не найдено результатов
      if (noResultsMessage) {
        if (!found) {
          noResultsMessage.style.display = 'block'; // Показываем сообщение
        } else {
          noResultsMessage.style.display = 'none';  // Скрываем сообщение
        }
      }
    });
  }

});
