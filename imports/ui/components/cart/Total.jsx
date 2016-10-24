import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Meteor} from 'meteor/meteor';


class Total extends React.Component {
  constructor(props) {
    super(props);
    this.handlePayment = this.handlePayment.bind(this);
  }
  handlePayment(event, val) {
    this.setState({selectedService: true});
    this.setState({processing: true});
    const SELF = this;
    let checkout = StripeCheckout.configure({
      key: Meteor.settings.public.stripe,
      image: '',
      locale: 'auto',
      token(token) {
        const {selectedService} = SELF.state;
        const charge = {
          amount: token.amount || selectedService.amount.cents,
          currency: token.currency || 'usd',
          source: token.id,
          description: token.description || selectedService.name,
          receipt_email: token.email
        };
        Meteor.call('processPayment', charge, (error, response) => {
          if (error) {
            SELF.setState({processing: false});
          }
          return response;
        });
      },
      closed() {
        SELF.setState({processing: false});
      }
    });
    checkout.open({name: 'Ghostbusting Service', description: "saad", amount: val*100, bitcoin: false});

  }
  render() {
    var setWidth = {
      width: "10px"
    };
    const {sum} = this.props;
    return (
      <tr>
        <td colSpan={4}>&nbsp;</td>
        <td colSpan={2}>
          <table className="table table-condensed total-result">
            <tbody>
              <tr>
                <td>Cart Sub Total</td>
                <td>
                  <div style={setWidth}>{sum}</div>
                </td>
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
                <td>
                  <span >
                    <div style={setWidth}>{parseInt(sum + ((sum * 2) / 100))}</div>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <a data-service="full-torso-apparition" className="btn btn-success pull-right" onClick={(event) => this.handlePayment(event, parseInt(sum + ((sum * 2) / 100)))}>
                    Buy Now
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </td>

      </tr>
    );
  }
}
export default Total;
