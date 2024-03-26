// document.addEventListener('wheel', (event) => {
//     // Only handle vertical scroll
//     if (event.deltaY > 0) {
//         event.preventDefault();
//         smoothScrollDown(document.documentElement, 100, 1000);
//     }
//     if (event.deltaY < 0) {
//         event.preventDefault();
//         smoothScrollTop(document.documentElement, 100, 1000);
//     }
// });

// const smoothScrollDown = (domElement, pixel, delay) => {
//     const intervalToRepeat = 25;
//     const step = (intervalToRepeat * pixel) / delay;

//     if (step < pixel) {
//         domElement.scrollTop += step;
//         setTimeout(function() {
//             smoothScrollDown(domElement, pixel - step, delay);
//         }, intervalToRepeat);
//     }
// }

// const smoothScrollTop = (domElement, pixel, delay) => {
//     const intervalToRepeat = 25;
//     const step = (intervalToRepeat * pixel) / delay;

//     if (step < pixel) {
//         domElement.scrollTop += -step;
//         setTimeout(function() {
//             smoothScrollTop(domElement, pixel - step, delay);
//         }, intervalToRepeat);
//     }
// }