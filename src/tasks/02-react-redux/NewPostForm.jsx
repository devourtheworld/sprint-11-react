import React, {Component} from "react";
import {addNewPost} from "./actions";
import {connect} from "react-redux";

const  mapStateToProps = state => ({
        authors: state.authors,
        posts: state.posts
});

export class NewPostForm extends Component {
    state = {
        title : "",
        selectedAuthor : null,
    };

    onSelectedAuthorChanged = (e) => {
        const {value} = e.target;
        this.setState({selectedAuthor : value || null})
    }

    onPostTitleChanged = (e) => {
        const {value} = e.target;
        this.setState({title : value});
    }

    onAddNewPostClicked = () => {
        if (this.state.title==="" || this.state.selectedAuthor===null){
        } else {
            this.props.addNewPost(this.state.selectedAuthor, this.state.title);
        }
    }

    render() {
        const {title = "", selectedAuthor = null} = this.state;
        const {authors = []} = this.props;

        const authorsOptions = authors.map(author => <option key={author.authorId} value={author.authorId}>{author.name}</option>);
        // Add an empty selection option
        authorsOptions.unshift(<option key="empty" value="" />);

        return (
            <div>
                <h4>New Post</h4>
                <input type="text" onChange={this.onPostTitleChanged} value={title} />
                <div>Author: <select value={selectedAuthor || ''} onChange={this.onSelectedAuthorChanged}>{authorsOptions}</select></div>
                <div><button onClick={this.onAddNewPostClicked}>Add New Post</button></div>
            </div>
        )
    }
}

export default connect (mapStateToProps, {addNewPost})(NewPostForm);
