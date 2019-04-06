import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal 22Reacwt Webpac22k Babel Setup';

class Test extends React.Component{
    state = {
        name: 'Dan'
    }
    render(){
        return <div>{this.state.name}</div>
    }
}

ReactDOM.render(
  <div><Test/></div>,
  document.getElementById('app')
);

module.hot.accept();
