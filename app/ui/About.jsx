"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
function About() {
    var match = react_router_dom_1.useRouteMatch('/about/:id');
    // Do whatever you want with the match...
    if (match) {
        console.log(match.params.id);
    }
    return <pre>{JSON.stringify(match, null, 4)}</pre>;
}
exports.default = About;
