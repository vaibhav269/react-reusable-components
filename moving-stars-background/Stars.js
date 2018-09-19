/*This component adds a number of moving and glowing star looking white dots to the viewport */

import React,{Component} from 'react';
import '../../css/star.css';

class Stars extends Component{
    constructor(){
        super();
        
        this.starNo;
        this.movementController;
        this.height = window.innerHeight;
        this.width = window.innerWidth;

        this.state = {            
            stars:null
        }
        this.changeStarPosition = this.changeStarPosition.bind(this);
    }

    changeStarPosition(){
        /* this function changes the position of stars by changing the state 'stars' */
        let starArray = [];
        let width = this.width;
        let height = this.height;
        let starNo = this.starNo;
        for(let i = 0 ; i < starNo ; i++ ){
            let tempStar = {};
            tempStar['left'] = Math.floor(Math.random()*width+1);
            tempStar['top'] = Math.floor(Math.random()*height+1);
            tempStar['key'] = i;
            starArray.push(tempStar);                
        }
        this.setState({stars:starArray});
        console.log(this.state.stars);
    }
    
    componentWillMount(){
        /* Here we are creating and deciding the number of stars and their max and min position*/
        this.starNo = Math.floor(Math.random()*50 + 10);
        let starArray = [];
        this.height = window.innerHeight;
        this.width = window.innerWidth;

        for(let i = 0 ; i < this.starNo ; i++ ){
            let tempStar = {};
            tempStar['left'] = Math.floor(Math.random()*this.width+1);
            tempStar['top'] = Math.floor(Math.random()*this.height+1);
            tempStar['key'] = i;
            starArray.push(tempStar);
        }
        this.setState({stars:starArray});        
        //to clear the listener of unmounting of component
        this.movementController = setInterval(this.changeStarPosition,25000);
    }

    componentDidMount(){
        //can't update state directly in componentDidMount so using timeout for initial triggering of stars movement
        setTimeout(this.changeStarPosition,10); 
    }
    componentWillUnmount(){
        clearInterval(this.movementController);
    }

    render(){        
        return(
            <div style={{height:"100%",position:"absolute",width:"100%",top:"0"}}>
                {
                    this.state.stars.map(function(star){
                        return(
                            <div className = "star" style = {{top:star.top,left:star.left}} key={star.key} > </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Stars;