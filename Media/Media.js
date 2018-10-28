import React,{Component} from 'react';

class Media extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="media p-1">
            <img className="align-self-start mr-3" src = { this.props.img } alt="Generic image" style={{maxWidth:'15%'}}/>
            <div className="media-body">
              <h3 className="mt-0 font-weight-bold" style = {{color:'#26dccd'}} >{this.props.heading}</h3>
              <p>{this.props.content}</p>             
            </div>
          </div>
        )
    }
}

export default Media;