import React from 'react';
import ReactDom from 'react-dom';
export default class Control extends React.Component {
    constructor(props){
        super()
        this.dispatchAttributes(props.attributes)
        this.dispatchFunction(props.functions)
    }
    dispatchAttributes(attributes){
        let that = this;
        let attrs = Object.keys(attributes);
        attrs.forEach(function(attr, index){
            that[attr] = attributes[attr]
        })
    }
    dispatchFunction(functions){
        let that = this;
        let funcs = Object.keys(functions);
        funcs.forEach(function(fun, index){
          that[fun] = functions[fun].bind(that)
        })
    }
    render(){
        return this.props.render.call(this)
    }
}