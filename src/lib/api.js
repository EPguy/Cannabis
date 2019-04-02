import axios from 'axios';  
import { Cookies } from 'react-cookie';
import { resolve } from 'dns';
import { reject } from 'q';

const cookies = new Cookies();

export const SignIn = (Login_id,Login_password) => {
                                                    axios.post("http://18.220.117.207:5000/auth/login",{id:Login_id, password:Login_password})
                                                    .then((response) => {
                                                        GetNick(response.data)
                                                        cookies.set("token", response.data)
                                                    })
                                                    .then(() => alert('로그인 성공!'))
                                                    .catch(e => alert('아이디 비밀번호가 틀립니다.'))
                                                }
export const SignUp = (id, realname, password, email, nickname) => {
                                                                    console.log(id);
                                                                    axios.post("http://18.220.117.207:5000/auth/signUp",{id: id, realName: realname, password: password, email: email, nickname: nickname})
                                                                    .then(() => alert('회원가입이 완료되었습니다.'))
                                                                    .catch(e => console.log(e))
                                                                }
export const GetNick = () => {
    axios.get("http://18.220.117.207:5000/user/profile", { headers: {"token": cookies.get("token")}})
    .then(response => {
        return response.data;
    })
    .catch(e => console.log(e)) 
}                                                               