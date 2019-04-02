import React, { Component } from 'react';
import styles from './Banner.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Main_Banner from 'image/Banner.jpg';
import Poker_Banner from 'image/Poker.jpg';

const cx = classNames.bind(styles);

class Banner extends Component {
    render() {
        return (
            <div id="Banner" className={cx('Banner-wrap')}>
                <div className={cx('Banner')}>
                    <Link to="/"><img src={Main_Banner}/></Link>
                    {/* <div className={cx('Banner_Text')}>
                            <p>CANNABIS의 오신것을 환영합니다.</p>
                        </div> */}
                </div>
            </div>
        );
    }
}

export default Banner;