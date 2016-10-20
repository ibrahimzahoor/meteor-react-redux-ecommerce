import React from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router';
import { store } from '../redux/store.js';
import {
  saveCategory
} from '../redux/actions/index.js';

/*
 * it will only display the footer
 */
class SubCategory extends React.Component {
  constructor(props) {
    super(props);
    this.dispatcher = this.dispatcher.bind(this);
    // console.log("Sub Categores are ", props.subCat);
  }
  dispatcher(){
    var obj = {};
    obj.Id = this.props.catId;
    store.dispatch(
      saveCategory(obj)
    );
  }
  render() {
    const {name} = this.props;
    return (
      <li onClick={this.dispatcher}>
        <Link to="/products" >{name}</Link>
      </li>
    );
  }
}

export default SubCategory;
