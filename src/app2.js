import "./app2.css";
import $ from "jquery";
const M = {
    data: {
        liIndex: window.localStorage.getItem('li-index') || 0
    }
}
const V = {
    el(container) {
        $(`<ol class="tab-bar">
              <li><span>1111</span></li>
              <li><span>2222</span></li>
           </ol>
           <ol class="tab-content">
               <li>内容1</li>
               <li>内容2</li>
           </ol>`).appendTo(container)
    },
    init(index) {
        $('#App2').find('.tab-bar>li').eq(index).addClass("selected")
        $('#App2').find('.tab-content>li').eq(index).addClass("active")
    }
}
const C = {
    init(container) {
        V.el(container)
        V.init(M.data.liIndex)
        C.bindEvent()
    },
    bindEvent() {
        $('#App2').on("click", ".tab-bar li", e => {
            const $li = $(e.currentTarget);
            $li.addClass("selected")
                .siblings()
                .removeClass("selected");
            const index = $li.index()
            window.localStorage.setItem('li-index', index)
            $('.tab-content>li').eq(index).addClass('active')
                .siblings().removeClass('active')
        })
    }
}

export default C.init