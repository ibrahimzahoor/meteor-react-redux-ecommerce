import React from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router';
import { store } from '../redux/store.js';
import {
  updatePageNumber
} from '../redux/actions/index.js';


/*
 * it will only display the footer
 */
class Paginator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages:1,
      pageNumber:1,
      total : 0,
    };
    this.dispatcher = this.dispatcher.bind(this);
    this.renderTasks = this.renderTasks.bind(this);
    // console.log("Total number of products received in Paginator " , props.total);
  }
  dispatcher(event , val){
    // console.log("Paremeter received " , val);

    store.dispatch(
      updatePageNumber(val)
    );
  }
  componentWillReceiveProps(nextProps){
     console.log("Props are changed in Paginator", nextProps);
     this.setState({
       pages: Math.ceil(nextProps.total/6),
       pageNumber: store.getState().pageNumber,
       total:nextProps.total,
     })
  }
  componentWillMount(){
    console.log("Total number of products received in Paginator " , this.props.total);
    this.setState({
      pages : Math.ceil(this.props.total/6),
      pageNumber: store.getState().pageNumber,
      total:this.props.total,
    } , function(){
      console.log("Pages that are to be displayed are " , this.state.pages);
      // console.log("Page Number clicked " , this.state.pageNumber);
    });
  }
  renderTasks(){

  }
  render() {
    let list = [];
    for (let i = 0; i < this.state.pages; i++)
      list.push(<li className={
        this.state.pageNumber === i+1 ? 'active' : ''
      } key={i} onClick={(event) =>this.dispatcher(event , i+1)}><Link to="/products">{i+1}</Link></li>);

    console.log("List is " , list);
    return (
      <ul className="pagination">
        {list}
        <li className="disabled"><Link >({this.state.total})</Link></li>
      </ul>
    );
  }
}

export default Paginator;
