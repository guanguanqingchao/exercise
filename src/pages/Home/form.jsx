import React, { Component } from "react";
import uuidv1 from "uuid";
import { addArticle } from "actions";
import { useSelector, useDispatch, connect } from 'react-redux'



class ConnectedForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ""
        };

    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }


    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticle({ title, id }); //dispatch a action
        this.setState({ title: "" });
    }

    render() {
        const { title } = this.state;

        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => this.handleChange(e)}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    SAVE
                </button>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

// const Form = connect(null, mapDispatchToProps)(ConnectedForm);
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;