const side_bar = (() => {
    function display_side_bar() {
        $('i').click(() => {
            $('.side_bar').toggleClass('side');
            toggle_icon();
        });
    }

    function toggle_icon() {
        $('i').toggleClass("fa-times");
    }

    return { display_side_bar };
})();

export { side_bar };