import React from 'react';

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <div>CAT:{mouse.x}</div>
        );
    }
}

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

export default class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <h6>Move the mouse around!</h6>
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )} />
            </div>
        );
    }
}