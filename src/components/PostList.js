import React from 'react';

export default class PostList extends React.Component {
    render(){
      return(
        <div className="col-lg-8 col-lg-offset-2 card">
            <div className="profile">
              <i className="fa fa-film" aria-hidden="true"></i>
              <ul>
                <li>
                  <h3 className="headings">
                    {this.props.blog}
                    </h3>
                </li>
            </ul>
            </div>
          </div>
      )
    }
  }
