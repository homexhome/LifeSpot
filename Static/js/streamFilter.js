function filterStreams() {
    const searchBar = document.querySelector('.search-bar');
    const input = searchBar.querySelector('input');
    const videoContainers = document.querySelectorAll('.video-container');

    input.addEventListener('input', function () {
        const searchText = input.value.toLowerCase();

        videoContainers.forEach(function (videoContainer) {
            const videoTitle = videoContainer.querySelector('.video-title').textContent.toLowerCase();

            if (videoTitle.includes(searchText)) {
                videoContainer.style.display = 'block';
            } else {
                videoContainer.style.display = 'none';
            }
        });
    });
};