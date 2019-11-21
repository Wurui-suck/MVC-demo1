import $ from 'jquery'
import app1 from './app1.js'
import app2 from './app2.js'
import app3 from './app3.js'
import app4 from './app4.js'
import './reset.css'
import './style.css'
$(`<section id='App1'></section>`).appendTo('#root')
$(`<section id='App2'></section>`).appendTo('#root')
$(`<section id='App3'></section>`).appendTo('#root')
$(`<section id='App4'></section>`).appendTo('#root')
app1($('#App1'))
app2($('#App2'))
app3($('#App3'))
app4($('#App4'))