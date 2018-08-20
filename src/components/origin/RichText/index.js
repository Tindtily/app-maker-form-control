import React from "react";
class PropsPanel extends React.Component{
    constructor(props){
      super()
      this.attributesList = this.object2List(props.attributes)
    }
    expandProps(){
        let count = 0;
        return this.attributesList.map((attr)=>
            (<div className='props-panel' key={count++}>
                <div className="props-panel__key">{attr.key}</div>
                <div className="props-panel__value">{attr.value}</div>
            </div>)
        )
    }
    object2List(object){
      let keys = Object.keys(object)
      return keys.map((key)=>{
        return {key:key, value:object[key]}
      })
    }
    render(){
      let panels = this.expandProps();
        return(
            <div className='props-panels'>
              {panels}
            </div>
        )
    }
}
