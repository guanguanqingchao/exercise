import React, { Component } from "react";
import { connect } from "react-redux";



// const ConnectedList = (props) => (
//     <ul className="list-group list-group-flush">
//         {props.articles.map(el => (
//             <li className="list-group-item" key={el.id}>
//                 {el.title}
//             </li>
//         ))}
//     </ul>
// );
export class ConnectedList extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        const { articles } = this.props;
        return <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>;
    }

}


const mapStateToProps = state => {
    return { articles: state.articles };
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;