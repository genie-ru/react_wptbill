import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        stage:2
    }

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                // nextStage: () => this.setState({ stage: this.state.stage + 1 })
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }

}

export {
    MyContext,
    MyProvider
}
// Path: src\context\index.js