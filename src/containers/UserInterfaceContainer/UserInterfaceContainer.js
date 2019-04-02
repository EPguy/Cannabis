import React, { Component } from 'react';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import UserInterface from 'component/UserInterface';
import ProfileModal from 'component/ProfileModal';

const cookies = new Cookies();

class UserInterfaceContainer extends Component {
    state = {
        nickname: null,
        realname: null,
        yam: null,
        image: null,
        isProfileClick: false
    }

    componentDidMount(){
        axios.get("http://18.220.117.207:5000/user/profile", { headers: {"token": cookies.get("token")}})
        .then(response => {
            this.setState({
                nickname: response.data.nickname,
                realname: response.data.realname,
                yam: response.data.yam,
                image: response.data.profile
            })
        })
        .catch(e => console.log(e))
    }

    ProfileClick = () => {
        this.setState({
            isProfileClick: !this.state.isProfileClick
        })
    }

    render() {
        const { nickname, realname, yam, image } = this.state;
        const { ProfileClick } = this;
        return (
            <div>
                <UserInterface realname={realname} onClick={ProfileClick}/>
                {
                    this.state.isProfileClick ? <ProfileModal onClick={ProfileClick} nickname={nickname} realname={realname} yam={yam} image={image} /> :  null
                }
            </div>
        );
    }
}

export default UserInterfaceContainer;