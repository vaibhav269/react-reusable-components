import React,{Component} from 'react';

class Card extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="card d-inline-block m-2" style={{width: '18rem'}} >
            <img className="card-img-top" src={this.props.img} alt="Card image cap"/>
            <div className="card-body">
            <h3 className="card-title mt-0 font-weight-bold" style = {{color:'#26dccd'}} >{this.props.heading}</h3>
                <p className="card-text text-muted">{this.props.content}</p>
            </div>
            </div>
        )
    }
}

export default Card;