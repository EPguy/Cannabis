import React, { Component } from 'react';
import axios from 'axios';
import RankList from 'component/Rank/RankList';
import RankTop from 'component/Rank/RankTop';
import { changeExt } from 'upath';
import styles from './RankContainer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class RankContainer extends Component {

    state = {
        Rank: [ 
        ]
    }

    componentDidMount(){
        axios.get("http://18.220.117.207:5000/user/rank")
        .then(response => {
            this.setState({
                Rank: this.state.Rank.concat(response.data)
            })
        })
    }
    render() {
        const { Rank } = this.state;
        return (
            <div id="Ranking">
                <RankTop TopRank={Rank.filter((v,i) => i < 5)}/>
                <table className={cx('ranking-table')}>
                    <thead>
                        <tr>
                            <th className={cx('ranking-table__header')}></th>
                            <th className={cx('ranking-table__header')}>사용자</th>
                            <th className={cx('ranking-table__header')}>Yam</th>
                        </tr>
                    </thead>
                    <tbody>
                        <RankList RankInfo={Rank}/>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RankContainer;