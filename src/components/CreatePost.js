import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class CreatePost extends React.Component {
  state = {
      authorName: '',
      blogTitle: '',
      blogEntry: ''
    }


addtolist = (e) => {
  e.preventDefault();
  const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/`;

      fetch(URL, {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          }
      }).then(response => {
        console.log(response, "yay");
      }).catch(err => {
        console.log(err, "boo!");
      });
    this.setState({authorName: '', blogTitle: '', blogEntry: ''});
  }

  // handleAuthorName = (e) => this.setState({authorName: e.target.value});
  // handleBlogTitle = (e) => this.setState({blogTitle: e.target.value});
  // handleBlogEntry = (e) => this.setState({blogEntry: e.target.value});

  handle = field => e => this.setState({[field]: e.target.value})

  render() {
    return (
      <div className="container">
        <Form>
           <FormGroup>
             <Label for="exampleEmail">Author Name</Label>
             <Input type="text" name="name" id="exampleEmail" placeholder="enter your name" onChange={this.handle('authorName')} value={this.state.authorName}/>
           </FormGroup>
           <FormGroup>
             <Label for="examplePassword">Title</Label>
             <Input type="text" name="title" id="examplePassword" placeholder="title your blog" onChange={this.handle('blogTitle')} value={this.state.blogTitle}/>
           </FormGroup>
           <FormGroup>
             <Label for="exampleText">Blog</Label>
             <Input type="textarea" name="text" id="exampleText" placeholder="write your blog here..." onChange={this.handle('blogEntry')} value={this.state.blogEntry}/>
           </FormGroup>
           <Button color="primary" onClick={this.addtolist}>Submit</Button>
       </Form>
      </div>
    );
  }
}
