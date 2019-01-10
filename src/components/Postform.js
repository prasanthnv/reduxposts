import React, { Component } from 'react';
class PostForm extends Component {
    formData = {};
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        };
    }

    addPostHandler = (event) => {
        event.preventDefault();
        let post = {}
        console.log(this)
     Object.keys(this.refs).forEach(key=>{
        this.refs[key].className = this.refs[key].className .replace(' error','');
         if(this.refs[key].value == ''){
            this.refs[key].className = this.refs[key].className+' error'
         }
        this.setState({post:post});
     })
     console.log(post)
        // this.
    }

    textChangeHandler = (e) => {
        let elem = e.target;
        let name = elem.name;
        let value = elem.value;
        this.formData[name] = value;
     console.log(this.formData)

     this.setState({post:this.formData})
    }

    render() {
        return (
            <div className="container">
                <form>
                    <h2 className="text-left lbl-warning">Create New</h2>
                    <div>
                        <input ref="title" type="text" className="form-control" placeholder="Enter Title" name="title" onChange={this.textChangeHandler} />
                    </div>
                    <br />
                    <div>
                        <textarea ref="content" className="form-control" placeholder="Aa" name="content" onChange={this.textChangeHandler}></textarea>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        );
    }
}

export default PostForm;