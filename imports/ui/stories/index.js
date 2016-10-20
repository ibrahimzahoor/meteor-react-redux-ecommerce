import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Product from '../components/products/Product.jsx';

storiesOf('Product', module)
  .add('with text', () => (
    <Product />
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ));
