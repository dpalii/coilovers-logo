window.onload = () => {
    let isMouseDown = false;
    let pos = 0;
    let prevPos = 0;
    const imagesDiv = document.getElementById('images');

    window.addEventListener('mousedown', () => {
        isMouseDown = true;
    });

    window.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    window.addEventListener('mousemove', (e) => {
        e.preventDefault();
        prevPos = pos;
        pos = e.clientX;

        if (isMouseDown) {
            imagesDiv.scrollBy(prevPos - pos, 0);
        }
    });
}