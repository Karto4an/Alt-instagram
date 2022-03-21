var scrollbar = document.getElementById('videos-scroll');
var shrt_vd_arrw_l = document.getElementById('sva_l');
var shrt_vd_arrw_r = document.getElementById('sva_r');

shrt_vd_arrw_l.addEventListener('click', event => {
    console.log('left');
    scrollbar.scrollBy({
        left: -600,
        behavior: "smooth"
    });
});

shrt_vd_arrw_r.addEventListener('click', event => {
    console.log('right');
    scrollbar.scrollBy({
        left: 600,
        behavior: "smooth"
    });
});
