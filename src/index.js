import React from 'react';
import ReactDOM from 'react-dom';
import './styles.less'

function Hello() {
  return (
    <div><h1>Hello from my configuration</h1></div>
  )
}

ReactDOM.render(<Hello/>, document.getElementById('app'))