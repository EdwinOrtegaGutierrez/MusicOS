const toggleButton = document.querySelector('.toggle-sidebar');
const sidebar = document.querySelector('.sidebar');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    toggleButton.classList.toggle('active');

    if (sidebar.classList.contains('active')) {
        document.addEventListener('click', closeSidebar);
    } else {
        document.removeEventListener('click', closeSidebar);
    }
});

function closeSidebar(event) {
    if (event.target !== toggleButton && event.target.closest('.sidebar') !== sidebar) {
        sidebar.classList.remove('active');
        toggleButton.classList.remove('active');
        document.removeEventListener('click', closeSidebar);
    }
}