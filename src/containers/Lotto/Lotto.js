import React, { Component } from 'react';
import styles from './Lotto.scss';
import classNames from 'classnames/bind';
import LottoMain from 'component/LottoMain';
import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const cx = classNames.bind(styles);

let randNum = new Array();

class Lotto extends Component {
    state = {
        first: null,
        second: null,
        third: null,
        fourth: null,
        fifth: null,
        sixth: null,
        yam: 0      
    }
    componentDidMount = () => {
        axios.get("http://18.220.117.207:5000/user/profile", { headers: {"token": cookies.get("token")}})
        .then(response => {
            this.setState({
                yam: response.data.yam,
            })
        })
    }
    handleClick = (e) => {
        e.target.style.pointerEvents = 'none';
        const { first, second, third, fourth, fifth, sixth } = this.state;
        const LottoNumber = first+"-"+second+"-"+third+"-"+fourth+"-"+fifth+"-"+sixth;
        console.log(LottoNumber);
        if(this.state.yam < 500) {
            alert("보유 yam이 부족합니다 !");
            e.target.style.pointerEvents = 'auto';
        } else {
            axios.post("http://18.220.117.207:5000/lotto/check", {lotto: LottoNumber})
            .then(() => axios.post("http://18.220.117.207:5000/user/yam",{yam: -500}, { headers: {"token": cookies.get("token")}}))
            .then(() => alert("구매가 완료되었습니다. ")) 
            .then(() => window.location.reload())
            .catch(e => console.log(e))
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        for(let i = 0; i < 7; i++) {
            randNum[i] = Math.floor(Math.random() * 45) + 1;
        }
        const { first, second, third, fourth, fifth, sixth } = this.state;
        const { handleChange, handleClick } = this;
        return (
            <div>
                <LottoMain randNum={randNum} handleChange={handleChange} handleClick={handleClick} first={first} second={second} 
                third={third} fourth={fourth} fifth={fifth} sixth={sixth}/>
                <div className={cx('description')}>
                    <div className={cx('text')}> 숫자 범위는 1 ~ 45 입니다. </div>
                    <div className={cx('text')}> 로또 가격은 500 yam입니다. </div>
                    <div className={cx('text')}> 숫자는 중복되지 않습니다. </div>
                </div>
            </div>
        );
    }
}

export default Lotto;