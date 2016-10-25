import React from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router';
import { store } from '../../redux/store.js';


class RangeSlider extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const link = document.createElement("link");
    link.src = "https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css";
    link.async = true;
    document.body.appendChild(link);
    const script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-1.11.3.min.js";
    script.async = true;
    document.body.appendChild(script);
    const script2 = document.createElement("script");
    script2.src = "https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js";
    script2.async = true;
    document.body.appendChild(script2);
}
  render() {
    return (
      <div data-role="page">
  <div data-role="header">
    <h1>Range Slider</h1>
  </div>

  <div data-role="main" class="ui-content">
    <form method="post" action="demoform.asp">
      <div data-role="rangeslider">
        <label for="price-min">Price:</label>
        <input type="range" name="price-min" id="price-min" min="0" max="1000"/>
        <label for="price-max">Price:</label>
        <input type="range" name="price-max" id="price-max" min="0" max="1000"/>
      </div>
      </form>
  </div>
</div>
    );
  }
}

export default RangeSlider;
