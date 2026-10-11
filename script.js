document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (!button.classList.contains('nav-cta') && !button.classList.contains('primary-btn') && !button.classList.contains('secondary-btn')) {
        button.animate(
          [
            { transform: 'scale(1)' },
            { transform: 'scale(0.98)' },
            { transform: 'scale(1)' }
          ],
          { duration: 220, easing: 'ease-out' }
        );
      }
    });
  });
});
