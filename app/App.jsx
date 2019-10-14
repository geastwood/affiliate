"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var About_1 = __importDefault(require("./ui/About"));
var react_router_dom_1 = require("react-router-dom");
function Home() {
    return <div>Home</div>;
}
function Users() {
    return <div>Users</div>;
}
function App() {
    return (<react_router_dom_1.BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <react_router_dom_1.Link to="/">Home</react_router_dom_1.Link>
            </li>
            <li>
              <react_router_dom_1.Link to="/about">About</react_router_dom_1.Link>
            </li>
            <li>
              <react_router_dom_1.Link to="/users">Users</react_router_dom_1.Link>
            </li>
          </ul>
        </nav>
        <react_router_dom_1.Switch>
          <react_router_dom_1.Route path="/about/:id">
            <About_1.default />
          </react_router_dom_1.Route>
          <react_router_dom_1.Route path="/users">
            <Users />
          </react_router_dom_1.Route>
          <react_router_dom_1.Route path="/">
            <Home />
          </react_router_dom_1.Route>
        </react_router_dom_1.Switch>
      </div>
    </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
