import React from 'react'

class IndexSection extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <section>
          <h1>这是index.js里面的index_section组件</h1>
      </section>
    );
  }
}

export default class Index extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
          <h1>这是index.js</h1>
          <IndexSection/>
      </div>
    );
  }
}
