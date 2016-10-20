import React from 'react';
import { Link } from 'react-router';
import { Grid, ButtonGroup, Button, DropdownButton, MenuItem, Row, Col } from 'react-bootstrap';
import { Footer } from '../components/application/Footer';
import { store } from '../redux/store.js';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter:0,
    };
  }
  componentDidMount(){

  }
  render() {
    store.subscribe(() => {
        this.setState({counter: store.getState().items});
    });
    var setWidthOfCartIcon = {
      width:"100px"
    };
    return (

      <div>

        <header id="header">
          <div className="header_top">
            <Grid>
              <Row>
                <Col sm={6}>

                  <div className="contactinfo">
                    <ul className="nav nav-pills">
                      <li>
                        <a href="#">
                          <i className="fa fa-phone"></i>
                          + 92 42 88 821</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-envelope"></i>
                          info@qbatch.com</a>
                      </li>
                    </ul>
                  </div>

                </Col>
                <Col sm={6}>
                  <div className="social-icons pull-right">
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-dribbble"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>

          <div className="header-middle">
            <Grid>

              <Row>
                <div className="col-sm-4">
                  <div className="logo pull-left">
                    <Link to="/products"><img src="./images/home/logo.png" alt=""/></Link>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="shop-menu pull-right">
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="#">
                          <i className="fa fa-user"></i>
                          Account</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star"></i>
                          Wishlist</a>
                      </li>
                      <li >
                        <a href="checkout.html">
                          <i className="fa fa-crosshairs"></i>
                          Checkout</a>
                      </li>
                      {/* <li><a href="cart"><i className="fa fa-shopping-cart"></i> Cart</a></li> */}
                      <li style={setWidthOfCartIcon} >
                        <Link to="/cart" >
                          <i className="fa fa-shopping-cart"></i>
                          Cart {this.state.counter === 0 ? "" : this.state.counter}</Link>
                      </li>
                      <li>
                        <a href="login.html">
                          <i className="fa fa-lock"></i>
                          Login</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Row>

            </Grid>
          </div>

          <div className="header-bottom">
            <div className="container">
              <div className="row">
                <div className="col-sm-9">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>
                  <div className="mainmenu pull-left">
                    <ul className="nav navbar-nav collapse navbar-collapse">
                      <li>
                        <a href="index.html" className="active">Home</a>
                      </li>
                      <li className="dropdown">
                        <a href="#">Shop<i className="fa fa-angle-down"></i>
                        </a>
                        <ul role="menu" className="sub-menu">
                          <li>
                            <a href="shop.html">Products</a>
                          </li>
                          <li>
                            <a href="product-details.html">Product Details</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart</a>
                          </li>
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Blog<i className="fa fa-angle-down"></i>
                        </a>
                        <ul role="menu" className="sub-menu">
                          <li>
                            <a href="blog.html">Blog List</a>
                          </li>
                          <li>
                            <a href="blog-single.html">Blog Single</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="404.html">404</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="search_box pull-right">
                    <input type="text" placeholder="Search"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {this.props.children}

        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default App;
