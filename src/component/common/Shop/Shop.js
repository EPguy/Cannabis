import React from 'react';
import styles from './Shop.scss';
import classNames from 'classnames/bind';
import realname from 'image/realname.png';
import Lottery from 'image/lottery.png';
import hacker from 'image/hacker.png';

const cx = classNames.bind(styles);

const Shop = () => {
    return (
        <div>
            <div className={cx('Shop-wrapper')}>
                <div className={cx('item')}>
                    <img src={realname}/>
                    <button>구매하기</button>
                </div>
                <div className={cx('item')}>
                    <img src={Lottery}/>
                    <button>구매하기</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;