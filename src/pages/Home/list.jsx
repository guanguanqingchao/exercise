import React, { Component } from "react";
import { connect, useSelector, useDispatch, useStore } from "react-redux";
import { TEST_REDUX_ACTION } from 'actions'


const ConnectedList = () => {

    const articles = useSelector(state => state.articles)
    const test = useSelector(state => state.test)
    const dispatch = useDispatch()
    const store = useStore()

    // console.log('store', store)






    return (
        <div>
            <ul className="list-group list-group-flush">
                {articles.map(el => (
                    <li className="list-group-item" key={el.id}>
                        {el.title}
                    </li>
                ))}
            </ul>
            <h2>测试</h2>
            <ul>
                {Array.isArray(test) && test.map(el => (
                    <li className="list-group-item" key={el.id}>
                        {el.title}
                    </li>
                ))}
            </ul>
            <button onClick={() => dispatch({ type: "TEST_REDUX_ACTION", payload: { title: '1243432424324hahha', id: 43 } })} > 点击出发react - redux hook action</button>
        </div>

    );

}
// export class ConnectedList extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {}
//     }

//     render() {
//         const { articles } = this.props;
//         return <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>;
//     }

// }



// const mapStateToProps = state => {
//     return { articles: state.articles };
// };

export default ConnectedList
