import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import List from "./list.jsx";
import Form from './form.jsx';
import Post from './post.jsx';

export function HomePage() {
    function handleClick() {
        window.history.pushState({ foo: 'bar' }, "page 2", "bar.html");

        console.log(window.history.state, window.history.length);
        // window.location.hash = 'edit'
        // window.addEventListener('hashchange', function (event) {
        //     console.log(event);
        // })

    }

    return (
        <div>这是HOME 页面
            <p>
                Click here <Link to="/user">user</Link> on GitHub.

                <button onClick={() => handleClick()}> 点击</button>

            </p>
            <div className="row mt-5">
                <div className="col-md-4 offset-md-1">
                    <h2>Articles</h2>
                    <List />

                </div>
                <div className="col-md-4 offset-md-1">
                    <h2>Add a new article</h2>
                    <Form />
                </div>
                <div className="col-md-4 offset-md-1">
                    <h2>API posts</h2>
                    <Post />
                </div>
            </div>

        </div>

    )

}