document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('loginModal');
    var openBtn = document.getElementById('openModalBtn');
    var closeBtn = document.getElementById('closeModalBtn');

    if (openBtn) {
        openBtn.onclick = function() {
            modal.style.display = 'flex';
        }
    }

    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}); 