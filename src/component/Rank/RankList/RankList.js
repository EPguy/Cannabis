import React from 'react';
import styles from './RankList.scss';
import classNames from 'classnames/bind';

import RankItem from 'component/Rank/RankItem';

const cx = classNames.bind(styles);

const RankList = ({ RankInfo }) => {
    return (
        <React.Fragment>
            {
                RankInfo.map(
                    (info,index) => (
                        <RankItem
                            rank={index+1}
                            name={info.nickname}
                            point={info.yam}
                            key={index}
                        />
                    )
                )
            }
        </React.Fragment>
    );
};

export default RankList;