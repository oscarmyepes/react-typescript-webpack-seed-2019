import * as React from "react";
import { connect } from 'react-redux';

let App = (props: any) => { 
console.log(props);
  return (
    <div>
      In app
    </div>
  )
}
export default  connect()(App)

