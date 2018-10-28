import React,{Component} from 'react';
import '../../css/HR.css';

class HR extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <h3 className="strike">
                <span>{this.props.content}</span>
            </h3>
        )
    }
}

export default HR;