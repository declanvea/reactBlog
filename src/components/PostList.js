import React from 'react';
import {Link} from 'react-router-dom';

export default class PostList extends React.Component {
  state = {
    results: []
  }

    componentDidMount(){
      const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger`;
      fetch(URL)
        .then(r => r.json())
          .then(results => {
              this.setState({results: results});
    });
  }

    render(){
      return(
        <div className="col-lg-8 col-lg-offset-2 card">
            <div className="profile">
              <i className="fa fa-film" aria-hidden="true"></i>
              {this.state.results.map(blog => (
                <div key={blog._id}>
                    <Link to={`/ShowPost/${blog._id}`}>{blog.blogTitle}</Link>
                </div>
              ))}
            </div>
          </div>
      )
    }
  }
