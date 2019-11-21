import $ from 'jquery'
import './app4.css'
const eventBus = $({})
const M = {
    data: { n: parseInt(localStorage.getItem('n')) || 0 },
    update(data) {
        Object.assign(M.data, data)
        eventBus.trigger('m:updated')
        localStorage.setItem('n', M.data.n)
    }
}
const V = {
    el(container) {
        $(`
     <div class="app1">
       <div id='number'>${M.data.n}</div>
       <button class="add">+1</button>
       <button class="minus">-1</button>
       <button class="mul">*2</button>
       <button class="divide">÷2</button>
     </div>
   `).appendTo(container)
    },
    render(data) {
        $('#number').text(data)
    }
}
const C = {
    init(container) {
        V.el(container)
        C.bindEvent()
        eventBus.on('m:updated', () => {
            V.render(M.data.n)
        })
    },
    ui: {
        '+': ['.add', 1],
        '-': ['.minus', 1],
        '*': ['.mul', 2],
        '/': ['.divide', 2]
    },
    bindEvent() {
        for (let key in C.ui) {
            if (C.ui.hasOwnProperty(key)) {
                $('#App1').on('click', `${C.ui[key][0]}`, () => {
                    M.update({ n: parseInt(eval(M.data.n + key + C.ui[key][1])) })
                })
            }
        }
    },
}
export default C.init