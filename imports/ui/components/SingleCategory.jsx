import React from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router';
import SubCategory from './SubCategory';
import { store } from '../redux/store.js';
import {
  saveCategory
} from '../redux/actions/index.js';

/*
 * it will only display the footer
 */
 const defaultProps = {
    catId : 0
 };

 const propTypes = {
    catId : React.PropTypes.number
 };
class SingleCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sub : false};
    this.handleSubCat = this.handleSubCat.bind(this);
    this.unmoountSubCat = this.unmoountSubCat.bind(this);
    this.dispatcher = this.dispatcher.bind(this);

    // console.log("Sub Categores are ", props.subCat);
  }
  printSubCategories() {
    return (
      <div id="sportswear" className="panel-collapse in" style={{
        height: "auto"
      }}>
        <div className="panel-body">
          <ul>
            {this.props.subCat.map((obj) => (<SubCategory  key={obj._id._str} name={obj.name} catId={obj.catId} />))}
          </ul>
        </div>
      </div>
    );
  }
  handleSubCat(){
    this.setState({sub:true});
  }
  unmoountSubCat(){
     this.setState({sub:false});
  }
  dispatcher(){
    var obj = {};
    obj.Id = this.props.catId;
    // console.log("CatId props " , this.props.catId);

    obj.subIds = [];
    // obj.subIds = this.props.subCat;
    this.props.subCat.forEach(function(cat){
      obj.subIds.push(cat.catId);
      // console.log("Id " , cat.catId );
    });
    // console.log("Ids are " , obj.subIds);

    store.dispatch(
      saveCategory(obj)
    );
  }
  render() {
    const {name} = this.props;
    return (
      <div className="panel panel-default" >
        <div className="panel-heading">
          <h4 onClick={this.dispatcher} className="panel-title">
            <Link to="/products"   onMouseOver={this.handleSubCat}>{name}</Link>
          </h4>
        </div>
        { this.state.sub ? this.printSubCategories() : <div></div>}
      </div>
    );
  }
}
SingleCategory.defaultProps = defaultProps ;
SingleCategory.propTypes = propTypes ;
export default SingleCategory;
