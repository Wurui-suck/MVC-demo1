import $ from 'jquery'
const V = {
    el(container) {
        $(`<div id="change" >`).appendTo(container)
    }
}
const C = {
    init(container) {
        V.el(container)
        C.bindEvent()
    },
    bindEvent() {
        $('#App4').on('mouseenter', '#change', () => {
            $('#change').addClass('active')
        }).on('mouseleave', '#change', () => {
            $('#change').removeClass('active')
        })
    }
}

export default C.init