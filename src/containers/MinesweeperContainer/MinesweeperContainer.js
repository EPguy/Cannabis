import React, { Component } from 'react';
import styles from './MinesweeperContainer.scss';
import classNames from 'classnames/bind';
import Minesweeper from 'component/Minesweeper';
import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const cx = classNames.bind(styles);

class MinesweeperContainer extends Component {
    state = {
        nickname: null,
        realname: null,
        yam : null,
        image: null,
        batting_money: 0,
        minenum: 0,
        success: 0,
        fail: false,
        plusyam: 0,
    }
    
    componentDidMount(){
        axios.get("http://18.220.117.207:5000/user/profile", { headers: {"token": cookies.get("token")}})
        .then(response => {
            this.setState({
                nickname: response.data.nickname,
                realname: response.data.realname,
                image: response.data.profile
            })
        })
        axios.get("http://18.220.117.207:5000/user/yam", { headers: {"token": cookies.get("token")}})
        .then(response => {
            console.log(response);
            this.setState({
                yam: response.data.yam,
            })
        })
        .catch(e => console.log(e))
    }

    
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value)
        })
        console.log(this.state.batting_money);
    }

    handleMineClick = (e) => {
        let booms = document.getElementsByClassName('booms');
        this.setState({
            minenum: parseInt(e.target.name)
        })
        for(let i=0; i<4; i++)
        {
            booms[i].style.color = 'white';
            booms[i].style.borderTop = '1px solid #777777';
            booms[i].style.borderRight = '1px solid #111111';
            booms[i].style.borderBottom = '1px solid #1A1A1A';
            booms[i].style.borderLeft = '1px solid #666666';
            booms[i].style.backgroundColor = '#444444';
        }
        e.target.style.backgroundColor = "#a07b12";
        console.log(e.target.name);
    }
    handleGameStart = () => {
        if((this.state.batting_money <= 0) || this.state.minenum === 0) {
            return alert("배팅금액 또는 지뢰 개수를 선택해주세요.")
        }
        if(this.state.batting_money > this.state.yam) {
            return alert("보유 yam이 부족합니다.")
        }
        this.gameStart();
        let arr = new Array();
        let booms = [];
        const {batting_money, minenum} = this.state;
        let { success, plusyam } = this.state;
        let next = document.getElementById("next");
        let stake = document.getElementById("stake");
        let value = Math.floor(Number(batting_money) / 25 * minenum + (success * 3 * minenum * 0.001 * batting_money));
        next.textContent = String(value);
        stake.textContent = String(this.state.plusyam);
        const handleTileClick = (e) => {
            e.target.style.pointerEvents = "none";
            let flag = 0;
            for(let i = 0; i < booms.length; i++) {
                if (booms[i] == e.target.id) {
                    e.target.style.backgroundColor = 'red';
                    alert("게임 오버");
                    this.setState({
                        fail: true
                    })
                    this.gameOver();
                    return;
                }
            }
            this.setState({
                plusyam: Number(this.state.plusyam) + value,
                success: ++(success)
            })
            e.target.textContent = String(value);
            value = Math.floor(Number(batting_money) / 25 * minenum + (success * 3 * minenum * 0.001 * batting_money)); 
            next.textContent = String(value);
            stake.textContent = String(this.state.plusyam);
            e.target.style.backgroundColor = 'forestgreen';
            
            
        }
        for(let i = 0; i < 25; i++) {
            let element = document.getElementsByTagName("td")[i];
            arr.push(element);
            
        }
        for(let i = 0; i < arr.length; i++) {
            arr[i].addEventListener('click', handleTileClick);
        }
    
        for(let i=0; i<25; i++)
        {   
            let rand = Math.floor(Math.random() * arr.length-1) + 1;    
            let temp = arr[rand];
            arr[rand] = arr[i];
            arr[i] = temp;
        }
        for(let i=minenum; i > 0; i--)
        {
            booms.push(arr[i].id);
        }
    }

    gameOver() {
        axios.post("http://18.220.117.207:5000/user/yam",{yam: -(this.state.batting_money)}, { headers: {"token": cookies.get("token")}})
        let ui = document.getElementById("table-Minesweeper");
        ui.style.pointerEvents = 'none';
    }
    
    // 게임 시작시
    gameStart() {
        alert('게임이 시작되었습니다.');
        let startButton = document.getElementById("button_start");
        let ui = document.getElementById("table-Minesweeper");
        ui.style.pointerEvents = 'auto';
        startButton.style.pointerEvents = 'none';
    }

    handleCashOut = (e) => {
        let startButton = document.getElementById("button_start");
        startButton.style.pointerEvents = 'auto';
        if(this.state.success < 1 && this.state.fail !== true){
            alert('한 개 이상의 타일을 열어야 합니다');
            return;
        } else if(this.state.fail === true) {
            alert("Cash out을 할 수 없습니다.");
            window.location.reload();
        } else {
            let CashOut = document.getElementById("CashOut");
            CashOut.style.pointerEvents = 'none';
            axios.post("http://18.220.117.207:5000/user/yam",{yam: this.state.plusyam}, { headers: {"token": cookies.get("token")}})
            .then(response => console.log(response))
            .then(() => alert("yam 충전 성공"))
            .then(() => window.location.reload())
        }
    }


    render() {
        const { handleCashOut, handleTileClick, handleChange, handleMineClick, handleGameStart } = this;
        const { nickname, realname, yam, image } = this.state;
        return (
            <div>
                <Minesweeper handleCashOut={handleCashOut} handleTileClick={handleTileClick} handleGameStart={handleGameStart} handleMineClick={handleMineClick} handleChange={handleChange} UserYam={yam}/>
            </div>
        );
    }
}

export default MinesweeperContainer;