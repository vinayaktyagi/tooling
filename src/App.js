import React from "react";
import { hot } from "react-hot-loader";
// import Warning from "./Warning";

const Warning = React.lazy(() => import("./Warning"));
class App extends React.Component {
  state = {
    count: 0,
  };

  render() {
    // throw new Error("Boom!");
    return (
      <div>
        <h1>Hello World Hot!~~~~~~</h1>
        <img src="./logo.png" alt="Logo of app" />
        <h2 className={this.state.count > 10 ? "warning" : null}>
          Count : {this.state.count}
        </h2>
        <button
          onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
        >
          +
        </button>
        <button
          onClick={() => this.setState((state) => ({ count: state.count - 1 }))}
        >
          -
        </button>
        {this.state.count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    );
  }
}
export default hot(module)(App);
