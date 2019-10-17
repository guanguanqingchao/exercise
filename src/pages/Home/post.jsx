import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "actions";



export class Post extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.getData();
    }
    render() {
        const { articles } = this.props
        return (
            <ul className="list-group list-group-flush">
                {Array.isArray(articles) && articles.map(el => (
                    <li className="list-group-item" key={el.id}>
                        {el.title}
                    </li>
                ))}
            </ul>
        );
    }
}
function mapStateToProps(state) {
    return {
        articles: Array.isArray(state.remoteArticles) && state.remoteArticles
    };
}
export default connect(
    mapStateToProps,
    { getData }
)(Post);