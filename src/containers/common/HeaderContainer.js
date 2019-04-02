import axios from 'axios';
import React, { Component } from 'react';
import $ from "jquery";
import Header from 'component/common/Header';
import LoginModal from 'component/common/LoginModal';
import UserInterfaceContainer from 'containers/UserInterfaceContainer/UserInterfaceContainer';
import { Cookies } from 'react-cookie';
import * as api from 'lib/api';

const cookies = new Cookies();

class HeaderContainer extends Component {
    state = {
        Login_ID: "",
        Login_Password: "",
        SignUp_Id: "",
        SignUp_Password: "",
        SignUp_Email: "",
        SignUp_RealName: "",
        SignUp_NickName: "",
        isClick: false,
        isLoginButton: true,
        isProfileClick: false
    }

    componentDidMount() {
        if($("#Banner").length) {
            var speed = 700;

            function scrolling(obj) {
                if(!obj) {
                    $('html, body').animate({scrollTop:0}, speed);
                } else {
                    var posTop = $(obj).offset().top -80;
                    $('html, body').animate({scrollTop:posTop}, speed);
                }
            };
            $("#RB").click(function() {
                var direction = $(this).attr("href");
                console.log(direction);
                scrolling(direction);
                return false;
            })
        }  
    }
    GetInfo = () => {
        axios.get("http://18.220.117.207:5000/user/profile", { headers: {"token": cookies.get("token")}})
        .then(response => {
            this.setState({
                user: {
                    nickname: response.data.nickname,
                    realname: response.data.realname,
                    yam: response.data.yam
                }
            })
        })
        .catch(e => console.log(e)) 
    }

    ExitClick = () => {
        this.setState({
            isClick: !this.state.isClick
        })
        console.log(this.state.isClick);
    }

    LoginClick = () => {
        const {Login_ID, Login_Password} = this.state;
        axios.post("http://18.220.117.207:5000/auth/login",{id:Login_ID, password:Login_Password})
                                                    .then((response) => {
                                                        window.location.href = '/';
                                                        cookies.set("token", response.data)
                                                    })
                                                    .then(() => {
                                                        alert('로그인 성공!')
                                                        this.setState({
                                                            isClick: false,
                                                        })
                                                    })
                                                    .catch(e => alert('아이디 비밀번호가 틀립니다.'))
    }
    
    LogoutClick = () => {
        this.setState({
            isLogin: false
        })
        cookies.remove("token");
        alert("로그아웃 되었습니다.");
        window.location.href = '/';
    }

    SignUpClick = () => {
        const {SignUp_Id, SignUp_Password, SignUp_Email, SignUp_RealName, SignUp_NickName} = this.state;
        api.SignUp(SignUp_Id, SignUp_RealName, SignUp_Password, SignUp_Email, SignUp_NickName);
    }

    LoginButtonToggle = () => {
        this.setState({
            isLoginButton: !this.state.isLoginButton
        })
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);
    }
    render() {
        const { ExitClick, LoginClick, SignUpClick, LoginButtonToggle, handleChange, LogoutClick} = this;
        const { Login_ID, Login_Password } = this.state;
        const { isClick, isLogin, isLoginButton } = this.state;
        const {LoginValue, SignUpValue} = this.state;
        const { UserInterface } = this.props;
        return (
            <div>
                <Header handleClick={ExitClick} isLogin={cookies.get('token')} LogoutClcik={LogoutClick} UserInterface={<UserInterfaceContainer/>}/>
                { this.state.isClick ? <LoginModal ExitClick={ExitClick} 
                                        LoginClick={LoginClick} isLoginButton={isLoginButton} handleChange={handleChange}
                                        LoginButtonToggle={LoginButtonToggle} SignUpClick={SignUpClick}
                                        Login_ID={Login_ID} Login_Password={Login_Password}
                                        /> : null 
                }
            </div>
        );
    }
}

export default HeaderContainer;