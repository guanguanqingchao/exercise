import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation, useHistory, useRouteMatch } from "react-router";

export function UserPage(props) {
    const initialUserState = {
        user: {},
        loading: true,
    }

    const [user, setUser] = useState(initialUserState)

    //  v5.1
    let { name } = useParams();
    let location = useLocation();
    let history = useHistory();

    // console.log(history, location);
    //  <v5.1
    // console.log(props.match.params)


    useEffect(() => {
        (async () => {
            const { data } = await axios(`https://api.github.com/users/${props.match.params.id}`)

            setUser(data)
        })()


    }, []) // Don't forget the `[]`, which will prevent useEffect from running in an infinite loop

    return user.loading ? (
        <div>Loading...</div>
    ) : (
            <div className="container">
                <h1>{props.match.params.name}</h1>
                <h1>{name}</h1>


                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Website</th>
                            <th>Followers</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.location}</td>
                            <td>
                                <a href={user.blog}>{user.blog}</a>
                            </td>
                            <td>{user.followers}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
}