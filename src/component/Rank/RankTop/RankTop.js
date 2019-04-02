import React from 'react';
import styles from './RankTop.scss';
import classNames from 'classnames/bind';
import crown from 'image/crown.png';

const cx = classNames.bind(styles);

const RankTop = ({TopRank}) => {
    const Big = TopRank.map((v,i) => {
        if(i == 0) {
            return (
                    <li className={cx('First','high-rank', 'big')}>
                        <div className={cx('Top_Rank')}>{i+1}</div>
                        <div className={cx('Top_Name')}>{v.nickname}</div>
                        <div className={cx('Top_Point')}>{v.yam} yam</div>
                        <img className={cx('Top_Profile')} src={`http://18.220.117.207:5000/${v.profile}`}/>
                    </li>
            )
        }
    })
    const Small = TopRank.map((v,i) => {
        if(i != 0 ) {
            return (
                <li className={cx('Second','high-rank', 'small')}>
                    <div className={cx('Top_Rank')}>{i+1}</div>
                    <div className={cx('Top_Name')}>{v.nickname}</div>
                    <div className={cx('Top_Point')}>{v.yam} yam</div>
                    <img className={cx('Top_Profile')} src={`http://18.220.117.207:5000/${v.profile}`}/>
                </li>
            )
        }
    })
    return (
        <React.Fragment>
            <ul className={cx('TopRank')}>
                
                <div className={cx('rank_wrapper_big')}>
                    <img className={cx('crown')} src={crown}/>
                    {Big}
                </div>
                <div className={cx('rank_wrapper_small')}>
                    {Small}
                </div>
            </ul>
        </React.Fragment>
    );
};

export default RankTop;