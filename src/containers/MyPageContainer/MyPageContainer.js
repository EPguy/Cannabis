import React, { Component } from 'react';
import styles from './MyPageContainer.scss';
import classNames from 'classnames/bind';
import MyPageComponent from 'component/MyPage';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import $ from 'jquery';

const cookies = new Cookies();
const cx = classNames.bind(styles);

class MyPageContainer extends Component {
    state = { 
        nickname: null,
        realname: null,
        image: null,
        yam: 0
    }
    componentDidMount() {
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
    }
    onMouseHover = (e) => {
        console.log(e.target);
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
    ChangeProfile = (e) => {
        var file = document.getElementById("img");
        var text = document.getElementById("upload_name");
        var fileName = file.value.split('/').pop().split('\\').pop();
        text.value = fileName;
    }
    ChangeButtonClick = () => {
        var file = document.getElementById("img");
        var text = document.getElementById("upload_name");
        var fileName = file.value.split('/').pop().split('\\').pop();
        if(fileName !== "") {
            axios.post("http://18.220.117.207:5000/user/img", {profile: fileName}, { headers: {"token": cookies.get("token")}})
            .then(response => {
                alert('이미지가 변경되었습니다. 재로그인시 반영됩니다.')
            })
            .catch(e => console.log("에러!"))
        } else {
            alert('바꾸고 싶은 이미지를 업로드 해주세요 !')
        }
    }
    UseRealName = () => {

    }
    UseLottery = () => {

    }
    UseChip = () => {

    }
    UseMegaphone = () => {
        
    }
    render() {
        const { yam, image, realname, nickname } = this.state;
        const { ChangeButtonClick, ChangeProfile } = this;
        const { onMouseHover, onMouseOut } = this;
        return (
            <div>
                <MyPageComponent ChangeButtonClick={ChangeButtonClick} ChangeProfile={ChangeProfile} yam={yam} profile={image} realname={realname} nickname={nickname} onHover={onMouseHover} onMouseOut={onMouseOut} />
            </div>
        );
    }
}

export default MyPageContainer;