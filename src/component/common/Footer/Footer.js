import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import Phantom from 'image/Phantom.png';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div className={cx('footer-wrapper')}>
            <div className={cx('footer-content-wrapper')}>
                <div className={cx('content','frontend')}>
                    <div className={cx('team')}>Frontend</div>
                    <div className={cx('member')}>김주성</div>
                </div>
                <div className={cx('content','frontend')}>
                    <div className={cx('team')}>Backend</div>
                    <div className={cx('member')}>황신우</div>
                </div>
            </div>
            <div className={cx('footer-bottom-wrapper')}>
                <div className={cx('copyright')}>
                    <img src={Phantom}/>
                    <span className={cx('copyright-text')}>2019 Phantom</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;