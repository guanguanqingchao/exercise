import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import List from "./list.jsx";
import Form from './form.jsx';
import Post from './post.jsx';
import { Counter } from './count.jsx';
import MouseTracker from './renderProp.jsx'

export function HomePage() {

    const [color, setColor] = useState('red')
    const [age, setAge] = useState(20)

    function handleClick() {
        setAge(30)
        // window.history.pushState({ foo: 'bar' }, "page 2", "bar.html");

        // console.log(window.history.state, window.history.length);
        // window.location.hash = 'edit'
        // window.addEventListener('hashchange', function (event) {
        //     console.log(event);
        // })

    }

    return (
        <div>这是HOME 页面
            <MouseTracker />
            <p>
                Click here <Link to="/user">user</Link> on GitHub.

                <button onClick={() => handleClick()}> 点击</button>

            </p>

            <Counter initialCount={3} name={'guanqingchao'} />

            <div className="row mt-5">
                <div className="col-md-4 offset-md-1">
                    <h2>Articles Lists</h2>
                    <List />

                </div>
                <div className="col-md-4 offset-md-1">
                    <h2>Add a new article</h2>
                    <Form>
                        <div>childchildchild</div>
                    </Form>
                </div>
                <div className="col-md-4 offset-md-1">
                    <h2>API posts</h2>
                    <button onClick={() => setColor('green')}>改变post组件的props</button>
                    <Post color={color} age={age} />
                </div>
            </div>

        </div>

    )

}