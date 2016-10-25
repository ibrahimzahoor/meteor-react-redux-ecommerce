import React from 'react';
import {Col ,FormGroup, FormControl,Checkbox} from 'react-bootstrap';
import SingleCategory  from './SingleCategory';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import { browserHistory } from 'react-router';
import { store } from '../../redux/store.js';
import {
  addIdToCategory,
  addPriceRangeToCategory,
  setQuery,
} from '../../redux/actions/index.js';

class Categories extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentValue: 0,
      currentValue2: 0,
      searchedData:""
    }
    this.renderTasks = this.renderTasks.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.changeValue2 = this.changeValue2.bind(this);
    this.handleSearchedData = this.handleSearchedData.bind(this);
  }
  renderTasks(){
    return this.props.categories.map((obj) => (
      <SingleCategory
        key = {obj._id._str}
        catId = {obj.catId}
        name = {obj.name}
        subCat = {obj.subCat}
      />
    ));
  }
  changeValue(event){
    if (  event.target.value > this.state.currentValue2)
      this.setState({currentValue2 : event.target.value});
    this.setState({currentValue : event.target.value}, function(){
      store.dispatch(addPriceRangeToCategory(this.state.currentValue , this.state.currentValue2))
    });
  }

  changeValue2(event){
    if (  event.target.value < this.state.currentValue)
      this.setState({currentValue2 : this.state.currentValue} , function(){
        store.dispatch(addPriceRangeToCategory(this.state.currentValue , this.state.currentValue2))
      });
    else
      this.setState({currentValue2 : event.target.value} , function(){
        store.dispatch(addPriceRangeToCategory(this.state.currentValue , this.state.currentValue2))
      });
  }

  handleSearchedData(e) {
      this.setState({searchedData: e.target.value});
      store.dispatch(setQuery(e.target.value));
  }
  render() {
    return (
      <Col sm={3}>
        <div className="left-sidebar">

        <div className="brands_products">
         <h2>Search Filter</h2>
           <div className="brands-name">
           <FormGroup>
              <FormControl type="text" name="filterItems"  value = {this.state.searchedData} onChange= {this.handleSearchedData} ref="filterItems" placeholder="Search Items Here" />
           </FormGroup>
           </div>
         </div>

          <h2>Category</h2>
          <div className="panel-group category-products" id="accordian">
            {this.renderTasks()}
          </div>


          <div className="brands_products">
           <h2>Price Range</h2>
             <div className="brands-name">
               <ReactBootstrapSlider
               value={this.state.currentValue}
               step={100}
               slideStop={this.changeValue}
               max={100000}
               min={0}
               orientation="horizontal"
               reverse={true}
                />
                <ReactBootstrapSlider
                value={this.state.currentValue2}
                step={100}
                slideStop={this.changeValue2}
                max={100000}
                min={this.state.currentValue}
                orientation="horizontal"
                reverse={true}
                 />
             </div>
           </div>

          <div className="brands_products">
           <h2>Brands</h2>
             <div className="brands-name">
               <ul className="nav nav-pills nav-stacked">
                  <li><a ><span className="pull-right">(50)</span><Checkbox inline ></Checkbox>Acne</a></li>
                 <li><a> <span className="pull-right">(56)</span><Checkbox inline ></Checkbox>Grüne Erde</a></li>
                 <li><a> <span className="pull-right">(27)</span><Checkbox inline ></Checkbox>Albiro</a></li>
                 <li><a> <span className="pull-right">(32)</span><Checkbox inline ></Checkbox>Ronhill</a></li>
                 <li><a> <span className="pull-right">(5)</span><Checkbox inline ></Checkbox>Oddmolly</a></li>
                 <li><a> <span className="pull-right">(9)</span><Checkbox inline ></Checkbox>Boudestijn</a></li>
                 <li><a> <span className="pull-right">(4)</span><Checkbox inline ></Checkbox>Rösch creative</a></li>
               </ul>
             </div>
           </div>

         </div>
      </Col>
    );
  }
}

export default Categories;
















// changeValue(event){
//   // console.log("Current Value is " , event.target.value);
//   this.setState({currentValue : event.target.value});
//   this.setState({currentValue2 : event.target.value});
//   var obj = {};
//   obj.Id = store.getState().category.Id;
//   console.log("CatId props " , store.getState().category.Id);
//   obj.subIds = [];
//   var storeSubIds = store.getState().category.subIds;
//   if (storeSubIds){
//     storeSubIds.forEach(function(id){
//       obj.subIds.push(id);
//       // console.log("Sub Id in Store " , id );
//     });
//   }
//   // console.log("going to dispatch");
//   obj.price = event.target.value ;
//   // store.dispatch(
//   //   saveCategory(obj)
//   // );
//   // console.log("going to push history");
//   // browserHistory.push('/products')
// }
