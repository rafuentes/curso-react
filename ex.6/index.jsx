import React from 'react'
import ReactDOM from 'react-dom'
import First, { Second } from './component'
//para extensão se alterou webpack-config.js

ReactDOM.render(
    <div>
        <First />
        <Second />
    </div>
, document.getElementById('app'))