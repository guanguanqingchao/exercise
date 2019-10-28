
import React, { Component, useState } from "react";
import RenderExample from './toggleRender.jsx';

export class DetailPage extends Component {
    constructor(props) {
        super(props);


        this.state = {

            articles: [
                { title: "React Redux Tutorial for Beginners", id: 1 },
                { title: "TypeScript tutorial for beginners", id: 2 }
            ]
        };
    }



    render() {
        const { articles, cat, dog } = this.state;
        return (
            <>
                <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>;
                <RenderExample />
            </>

        )
    }

}