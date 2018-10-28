import React,{Component} from 'react';

class MessageMe extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div style={{backgroundColor:'#d7d3d2'}}>
                <h5 className = "font-weight-bold text-center pt-3"> Send Me a Message </h5>
                <form className="p-2">
                    <div className="form-group">
                        <label className="text-muted">Subject</label>
                        <input type="subject" className="form-control" />                        
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Message</label>
                        <textarea type="message" className="form-control">
                        </textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" style={{backgroundColor:'#18bcb1'}} className="btn text-white btn-block">Send</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default MessageMe;