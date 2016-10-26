import React from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router';
import { store } from '../../redux/store.js';
import {
  addIdToCategory,
} from '../../redux/actions/index.js';

class SubCategory extends React.Component {
  constructor(props) {
    super(props);
    this.dispatcher = this.dispatcher.bind(this);
  }
  dispatcher(){
    store.dispatch(addIdToCategory(this.props.catId))
  }
  render() {
    const {name} = this.props;
    return (
      <li onClick={this.dispatcher}>
        <Link>{name}</Link>
      </li>
    );
  }
}

export default SubCategory;
