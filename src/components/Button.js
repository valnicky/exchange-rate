import React from 'react'
import superagent from 'superagent'

class Button extends React.Component {
    constructor(props){
        super(props);
        this.text= React.createRef();
        this.priceBox= React.createRef();
            this.state = {
                message: 'Loading...'     
             }   
                this.func = this.func.bind(this);
        }
   
    func(){
        const    request = superagent;
      //  const  API_KEY = "604f7e63bed2fb28f2541e0997367c09";
        const API_ENDPOINT = `http://data.fixer.io/api/latest?access_key=604f7e63bed2fb28f2541e0997367c09`;
    
        request.get(API_ENDPOINT)
        .then(function(response){
            const responseObject = response.body;
            console.log(responseObject);
            let UsdToMxn = responseObject.rates.MXN;
         //   const priceBox = document.querySelector("#price");
                console.log('usd '+UsdToMxn);
                   
             // this.props.priceBox.innerHtml = UsdToMxn;
              this.setState({message:  'hello'});
              //this.setState({message: this.state.message});
              //this.priceBox.textContent = UsdToMxn;
              
        })
        .catch(function(err){
        alert("Ooops!!!" + err); 
        })
    }
    
    render(){
  return (
    <div>
         <button onClick={this.func.bind(this)} className='btn' ref={this.text}>Tell me the price!</button>
          <div id="" className="price"  ref={this.priceBox}>{this.state.message}</div>
          <div>{this.props.priceBox}</div>
     </div>
  )
}
}
export default Button