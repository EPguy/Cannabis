import React from 'react';

import styles from './RankItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const RankItem = ({rank, name, point}) => {
    return (
        <tr className={cx('ranking-tr')}>
            <td className={cx('ranking-table__cell ranking-rank')}>{rank}</td>
            <td className={cx('ranking-table__cell ranking-name')}>{name}</td>
            <td className={cx('ranking-table__cell ranking-point')}>{point}</td>
        </tr>
    );
};

export default RankItem;