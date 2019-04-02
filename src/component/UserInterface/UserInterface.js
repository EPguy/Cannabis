import React from 'react';
import styles from './UserInterface.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

const UserInterface = ({ realname, onClick}) => {
    return (
        <div className={cx('interface')}>
            <div onClick={onClick} className={cx('front-interface')}>{realname}</div>
        </div>
    );
};

export default UserInterface;