import React from 'react';
import styles from './LottoMain.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const LottoMain = ({randNum, handleChange, handleClick}) => {
    const LottoBall = randNum.map((v,i)=> {
        if(v < 10) {
            return (<div className={cx('LottoBall', "yellow")} key={i}>{v}</div>)
        } else if(v < 20) {
            return (<div className={cx('LottoBall', "blue")} key={i}>{v}</div>)
        } else if(v < 30) {
            return (<div className={cx('LottoBall', "red")} key={i}>{v}</div>)
        } else if(v < 40) {
            return (<div className={cx('LottoBall', "purple")} key={i}>{v}</div>)
        } else if(v >= 40) {
            return (<div className={cx('LottoBall', "green")} key={i}>{v}</div>)
        }
    })
    return (
        <div className={cx('LottoMain-wrapper')}>
            <div className={cx('title')}> 제 <div id="title-number">1</div>회차</div>
            <div className={cx('LottoBall-wrapper')}>
                {LottoBall}
            </div>
            <div className={cx('buy-window')}>
                <input type="text" name="first"  maxlength="2" onChange={handleChange} className={cx('input-number')}></input>
                <input type="text" name="second" maxlength="2" onChange={handleChange} className={cx('input-number')}></input>
                <input type="text" name="third" maxlength="2" onChange={handleChange} className={cx('input-number')}></input>
                <input type="text" name="fourth" maxlength="2" onChange={handleChange} className={cx('input-number')}></input>
                <input type="text" name="fifth" maxlength="2" onChange={handleChange} className={cx('input-number')}></input>
                <input type="text" name="sixth" maxlength="2" onChange={handleChange} className={cx('input-number')}></input>
                <button onClick={handleClick} className={cx('buy-button')}>구매</button>
            </div>
        </div>
    );
};

export default LottoMain;