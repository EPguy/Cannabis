import React from 'react';
import styles from './LoginModal.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const LoginModal = ({ExitClick, LoginClick, SignUpClick, isLoginButton, LoginButtonToggle, handleChange}) => {
    const SignIn = () => {
        return (
            <React.Fragment>
                <input type="text" placeholder="ID" name="Login_ID" onChange={handleChange} className={cx('Modal_Input')}/>
                <input type="password" placeholder="Password" name="Login_Password" onChange={handleChange} className={cx('Modal_Input')}/>
                <button onClick={LoginClick} className={cx('Modal_Button')}>로그인</button>
            </React.Fragment>
        );  
    }
    const SignUp = () => {
        return (
            <React.Fragment>
                <input type="text" onChange={handleChange} placeholder="ID"  name="SignUp_Id" className={cx('Modal_Input')}/>
                <input type="password" onChange={handleChange} placeholder="Password" name="SignUp_Password" className={cx('Modal_Input')}/>
                <input type="text" onChange={handleChange} placeholder="Email" name="SignUp_Email" className={cx('Modal_Input')}/>
                <input type="text" onChange={handleChange} placeholder="RealName" name="SignUp_RealName" className={cx('Modal_Input')}/>
                <input type="text" onChange={handleChange} placeholder="NickName" name="SignUp_NickName" className={cx('Modal_Input')}/>
                <button onClick={SignUpClick} className={cx('Modal_Button')}>회원가입</button>
            </React.Fragment>
        ); 
    }
    return (
        <div class="w3-modal-content w3-animate-top">
            <div className={cx('content')}>
                <i className="fas fa-times 5x" onClick={ExitClick}></i>
                <div className={cx('modal_content')}>
                    {isLoginButton ? SignIn() : SignUp()}
                </div>
                <div className={cx('modal_Login')}>
                    {isLoginButton ? <div onClick={LoginButtonToggle} className={cx('Login_text')}>회원가입</div>
                    : <div onClick={LoginButtonToggle} className={cx('Login_text')}>로그인</div>}
                </div>
            </div>    
        </div>
    );
};

export default LoginModal;