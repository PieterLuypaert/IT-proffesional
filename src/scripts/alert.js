document.addEventListener('DOMContentLoaded', () => {
    const alert = document.querySelector('.alert');
    const closeBtn = document.querySelector('.alert__close');

    setTimeout(() => {
        alert?.removeAttribute('hidden');
        requestAnimationFrame(() => {
            alert?.classList.add('show');
        });
    }, 1000);

    closeBtn?.addEventListener('click', () => {
        alert?.classList.remove('show');
        setTimeout(() => {
            alert?.setAttribute('hidden', '');
        }, 300);
    });
});