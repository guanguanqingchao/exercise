import React from 'react';


const Toggle = (WrapComponent) => {

    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                on: true,
            }
        }

        toggle() {
            this.setState({
                on: !this.state.on
            })
        }


        render() {
            const { on } = this.state
            return <WrapComponent on={on} toggle={() => this.toggle()} />
        }
    }

}

class ShowNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { on, toggle } = this.props
        return (
            <>
                {
                    on && <h6>Show Nav</h6>
                }
                <button onClick={toggle}>Show/Hide</button>

            </>
        )
    }
}
class ShowDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { on, toggle } = this.props
        return (
            <>
                {
                    on && <h6>Show Detail</h6>
                }
                <button onClick={toggle}>Show/Hide</button>

            </>
        )
    }
}
ShowDetail = Toggle(ShowDetail)

ShowNav = Toggle(ShowNav)


export default class RenderExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {

        return (
            <>
                <h5>This is a render props example</h5>
                <ShowNav />
                <ShowDetail />
            </>
        )
    }

}