import $ from 'jquery'
import './app3.css'
const M = {
    data: localStorage.getItem('move') || 'yes',
    update(data) {
        M.data = data
        localStorage.setItem('move', M.data)
    }

}
const V = {
    el(container, move) {
        if (move === 'yes') {
            $(`<div class='box'>
          </div>`).appendTo(container)
        } else {
            $(`<div class='box active'>
            </div>`).appendTo(container)
        }
    }
}
const C = {
    init(container) {
        V.el(container, M.data)
        C.bindEvent()
    },
    bindEvent() {
        $('#App3').on('click', '.box', () => {
            if (M.data === 'yes') {
                $('#App3').find('.box').addClass('active')
                M.update('no')
            } else {
                $('#App3').find('.box').removeClass('active')
                M.update('yes')
            }
        })

    }
}
export default C.init