import React from 'react';
import {Link} from 'react-router-dom';

export default class ShowPost extends React.Component {
  state = {
    results: ''
  }

  componentDidMount() {
   const { _id } = this.props.match.params;
   let url = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${_id}`;
   fetch(url)
   .then(response => response.json())
   .then(results => {
     this.setState({results: results});
   });
 }

  render() {
    return (
      <div style={{textAlign:'center'}}>
        <p>Author: {this.state.results.authorName}</p>
        <p>Title: {this.state.results.blogTitle}</p>
        <p>Blog: {this.state.results.blogEntry}</p>
        <Link to='/PostList'>Return to Blog List</Link>
      </div>
    );
  }
}
