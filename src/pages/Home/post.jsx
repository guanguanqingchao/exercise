import React from "react";
import { connect } from "react-redux";
import { getData } from "actions";



export class Post extends React.Component {
    constructor() {
        super();
        this.state = {

        }
        // console.log('-----------constructor------')
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     // console.log('---------- getDerivedStateFromProps-------', nextProps, prevState)
    // }

    // componentWillMount() {
    //     console.log('----------componentWillMount------')

    // }
    // componentDidMount() {
    //     console.log('-----------componentDidMount-----')
    //     this.props.getData();
    // }
    // componentWillReceiveProps() {
    //     console.log('-----componentWillReceiveProps -----')

    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('=========should====')
    //     return true

    // }
    // componentWillUpdate() {
    //     console.log('-----componentWillUpdate-----')
    // }
    // componentDidUpdate() {
    //     console.log('------componentDidUpdate ---')
    // }
    render() {
        console.log('---------render-----')
        const { articles } = this.props
        return (
            <>
                <div>pros来自父组件：{this.props.color}</div>
                <ul className="list-group list-group-flush">
                    {Array.isArray(articles) && articles.map(el => (
                        <li className="list-group-item" key={el.id}>
                            {el.title}
                        </li>
                    ))}
                </ul>
            </>

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