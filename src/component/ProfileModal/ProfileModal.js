import React from 'react';
import styles from './ProfileModal.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ProfileModal = ({onClick, nickname, realname, yam, image}) => {
    return (
        <div className={cx("w3-modal-content w3-animate-top","Profile-Modal")}>
            <div className={cx('Profile-content')}>
                <i className="fas fa-times 5x" onClick={onClick}></i>
                <div className={cx('info')}>
                    <div className={cx('profile')}>
                        <img className={cx('item image')}src={image}></img>
                    </div>
                    <div className={cx('item')}>이름 : {realname}</div>
                    <div className={cx('item')}>닉네임 : {nickname}</div>
                    <div className={cx('item')}>yam : {yam}</div>
                </div>
            </div>    
        </div>
    );
};

export default ProfileModal;