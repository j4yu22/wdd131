document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const viewer = document.getElementById('viewer');
    const closeViewer = document.getElementById('close-viewer');
    const viewerImage = viewer.querySelector('img');

    function toggleMenu() {
        navMenu.classList.toggle('hidden');
    }

    function handleResize() {
        if (window.innerWidth > 999) {
            navMenu.classList.remove('hidden');
        } else {
            navMenu.classList.add('hidden');
        }
    }

    menuToggle.addEventListener('click', toggleMenu);
    window.addEventListener('resize', handleResize);

    handleResize();

    document.querySelector('#year').textContent = new Date().getFullYear();

    function viewHandler(event) {
        const target = event.target;
        if (target.tagName === 'IMG') {
            const src = target.src;
            const alt = target.alt;
            viewerImage.src = src;
            viewerImage.alt = alt;
            viewer.classList.remove('hidden');
            viewer.style.display = 'grid';
        }
    }

    function closeViewerHandler() {
        viewer.classList.add('hidden');
        viewer.style.display = 'none';
        viewerImage.src = '';
        viewerImage.alt = '';
    }

    document.querySelector('.gallery').addEventListener('click', viewHandler);
    closeViewer.addEventListener('click', closeViewerHandler);
});
