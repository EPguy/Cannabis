import React, { Component } from 'react';
import Shop from 'component/common/Shop';

class ShopContainer extends Component {
    state = {
        color: false
    }
    componentDidMount() {   
        setInterval(() => {
            console.log(this.state.color);
            if(this.state.color === false) {
                this.setState({
                    color: true
                })
            } else {
                this.setState({
                    color: false
                })
            }
            
        }, 500)
    }
    ProfileChange = () => {
        
    }
    BuyRealName = () => {

    }
    BuyLottery = () => {

    }
    BuyChip = () => {

    }
    BuyMegaphone = () => {

    }
    onMouseHover = (e) => {
        e.stopPropagation();
        let content_wrapper = e.target.children[2];
        if(content_wrapper !== undefined) {
            console.log(content_wrapper.style.display);
            content_wrapper.style.display = 'block';
        }
    }
    onMouseOut = (e) => {
        let content_wrapper = e.target.children[2];
        if(content_wrapper !== undefined) {
            console.log(content_wrapper.style.display);
            content_wrapper.style.display = 'none';
        }
    } 
    render() {
        const { color } = this.state;
        const { onMouseHover, onMouseOut } = this;
        return (
            <div>
                <Shop color={color} onHover={onMouseHover} onMouseOut={onMouseOut}/>
            </div>
        );
    }
}

export default ShopContainer;