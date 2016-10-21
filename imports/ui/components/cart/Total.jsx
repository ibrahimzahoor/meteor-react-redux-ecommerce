import React from 'react';
// import StripeCheckout from 'react-stripe-checkout';

class Total extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       itemsAddedToCart: 0,
       total:0
     };
     this.renderTasks = this.renderTasks.bind(this);
    //  console.log("Total:: props", props);

   }
   componentWillMount(){
      // console.log("Total Compponent mounted and Props are " , this.props);
   }
   componentWillReceiveProps(nextProps){
    //  console.log("Total Received new props that are ", nextProps);
   }
   renderTasks() {
    }

   render(){
     var setWidth = {
       width:"10px"
     };
     const { sum } = this.props;
    return (
        <tr>
            <td colSpan={4}>&nbsp;</td>
            <td  colSpan={2}>
              <table className="table table-condensed total-result">
                <tbody><tr>
                  <td>Cart Sub Total</td>
                  <td><div style={setWidth}>{sum}</div></td>
                </tr>
                <tr>
                  <td>Exo Tax</td>
                  <td>2%</td>
                </tr>
                <tr className="shipping-cost">
                  <td>Shipping Cost</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td><span ><div style={setWidth}>{sum + ((sum*2)/100)}</div></span></td>
                </tr>
              </tbody></table>
            </td>

            <StripeCheckout
                name="meteor-react-redux-ecommerce"
                description=""
                image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
                ComponentClass="div"
                panelLabel="Give Money"
                amount={1000}
                currency="USD"
                stripeKey="..."
                locale="zh"
                email="info@vidhub.co"
                shippingAddress
                billingAddress={false}
                zipCode={false}
                alipay
                bitcoin
                allowRememberMe
                token={this.onToken}
                reconfigureOnUpdate={false}
                triggerEvent="onTouchTap"
                >
                <button className="btn btn-primary">
                  Use your own child component, which gets wrapped in whatever
                  component you pass into as "ComponentClass" (defaults to span)
                </button>
              </StripeCheckout>

          </tr>
     );
   }
 }
 export default Total;
