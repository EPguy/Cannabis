import React from 'react';
import styles from './Shop.scss';
import classNames from 'classnames/bind';
import realname from 'image/realname.png';
import Lottery from 'image/lottery.png';
import chip from 'image/chip.png';
import megaphone from 'image/megaphone.png';

const cx = classNames.bind(styles);

const Shop = ({color, onHover, onMouseOut}) => {
    return (
        <div className={cx('shop-Allwrapper')}>
            <div className={cx('title')}>
                <div className={cx('title_text',{color})}>상 점</div>
            </div>
            <div className={cx('Shop-wrapper')}>
                <div onMouseOver={onHover} onMouseOut={onMouseOut} className={cx('item')}>
                    <img src={realname}/>
                    <button>구매하기</button>
                    <div id="wrapper" className={cx('content-wrapper')}>
                        <div id="text" className={cx('content')}>
                            <div className={cx('item-title')}>실명 밝혀버리기~</div>
                            <span className={cx('description')}>원하는 유저의 실명을 알 수 있습니다.</span>
                        </div>
                    </div>
                </div>
                <div onMouseOver={onHover} onMouseOut={onMouseOut} className={cx('item')}>
                    <img src={Lottery}/>
                    <button>구매하기</button>
                    <div id="wrapper" className={cx('content-wrapper')}>
                        <div id="text" className={cx('content')}>
                            <div className={cx('item-title')}>복권</div>
                            <span className={cx('description')}>30%확률로 5000yam을 획득할 수 있습니다.</span>
                            <span className={cx('description')}>복권 한개당 1000yam 입니다.</span>
                        </div>
                    </div>
                </div>
                <div onMouseOver={onHover} onMouseOut={onMouseOut} className={cx('item')}>
                    <img src={chip}/>
                    <button>구매하기</button>
                    <div id="wrapper" className={cx('content-wrapper')}>
                        <div id="text" className={cx('content')}>
                            <div className={cx('item-title')}>칩</div>
                            <span className={cx('description')}>인디언포커에서 yam 대신 사용되는 칩입니다.</span>
                            <span className={cx('description')}>칩 하나당 1000yam입니다.</span>
                        </div>
                    </div>
                </div>
                <div onMouseOver={onHover} onMouseOut={onMouseOut} className={cx('item')}>
                    <img src={megaphone}/>
                    <button>구매하기</button>
                    <div id="wrapper" className={cx('content-wrapper')}>
                        <div id="text" className={cx('content')}>
                            <div className={cx('item-title')}>확성기</div>
                            <span className={cx('description')}>자신이 하고싶은 말을 적으면 메인페이지에 올라가 모두가 볼 수 있다.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;