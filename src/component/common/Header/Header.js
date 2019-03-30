import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import logo from 'image/CANNABIS.png';


const cx = classNames.bind(styles);

const Header = ({ UserInterface, handleClick, LogoutClcik, isLogin }) => {
    return (
        <div>
            <header className={cx('header')}>
                <div className={cx('header-content')}>
                    <div className={cx('brand')}>
                        <Link to="/"><img src={logo}/></Link>
                    </div>
                    <div className={cx('right')}>
                        <a id="RB" href="#Ranking"> 
                            <div className={cx('item')}>
                                랭킹
                            </div>
                        </a>
                        <Link to="/Mine"> 
                            <div className={cx('item')}>
                                인디언포커
                            </div>
                        </Link>
                        <Link to="/Mine"> 
                            <div className={cx('item')}>
                                지뢰찾기
                            </div>
                        </Link>
                        <Link to="/Lotto"> 
                            <div className={cx('item')}>
                                로또
                            </div>
                        </Link>
                        <Link to="/Shop"> 
                            <div className={cx('item')}>
                                yam 상점
                            </div>
                        </Link>
                        <Link to="/MyPage"> 
                            <div className={cx('item')}>
                                마이페이지
                            </div>
                        </Link>
                        <a className={cx('login')} onClick={isLogin ? LogoutClcik : handleClick}>{isLogin ? "로그아웃" : "로그인"}</a>
                        { isLogin !== undefined ? UserInterface : null }
                    </div>
                </div>
                </header>
        </div>
    );
};

export default Header;