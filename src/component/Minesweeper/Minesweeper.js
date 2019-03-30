import React from 'react';
import styles from './Minesweeper.scss';
import classNames from 'classnames/bind';
import mine from 'image/mine.png';

const cx = classNames.bind(styles);

const Minesweeper = ({handleCashOut, handleGameStart, handleMineClick, BattingYam, handleChange, UserYam, next}) => {
    return (
        <div>
            <div className={cx('Minesweeper')}>
                <div className={cx('Container')}>
                    <div className={cx('user-interface')}>
                        <div className={cx('starter')}>
                            <div className={cx('top-row')}>
                                <div className={cx('user','batting')}><input type="text" name="batting_money"  onChange={handleChange}/></div>
                                <div className={cx('user', 'game_button')}><button id="button_start" onClick={handleGameStart}>게임 시작</button></div>
                            </div>
                            <div className={cx('bottom-row')}>
                                <div className="cell">
                                    <button onClick={handleMineClick} name="1" className={cx('booms')} id="mines_1">
                                        <span>
                                            <img src={mine}/>
                                        </span>
                                        1
                                    </button>
                                </div>
                                <div className="cell">
                                    <button onClick={handleMineClick} name="3" className={cx('booms')} id="mines_3">
                                        <span>
                                            <img src={mine}/>
                                        </span>
                                        3
                                    </button>
                                </div>
                                <div className="cell">
                                    <button onClick={handleMineClick} name="5" className={cx('booms')} id="mines_5">
                                        <span>
                                            <img src={mine}/>
                                        </span>
                                        5
                                    </button>
                                </div>
                                <div className="cell">
                                    <button onClick={handleMineClick} name="24" className={cx('booms')} id="mines_24">
                                        <span>
                                            <img src={mine}/>
                                        </span>
                                        24
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('table-mine')}>
                        <table id="table-Minesweeper">
                            <tbody>
                                <tr>
                                    <td id="1"></td>
                                    <td id="2"></td>
                                    <td id="3"></td>
                                    <td id="4"></td>
                                    <td id="5"></td>
                                </tr>
                                <tr>
                                    <td id="6"></td>
                                    <td id="7"></td>
                                    <td id="8"></td>
                                    <td id="9"></td>
                                    <td id="10"></td>
                                </tr>
                                <tr>
                                    <td id="11"></td>
                                    <td id="12"></td>
                                    <td id="13"></td>
                                    <td id="14"></td>
                                    <td id="15"></td>
                                </tr>
                                <tr>
                                    <td id="16"></td>
                                    <td id="17"></td>
                                    <td id="18"></td>
                                    <td id="19"></td>
                                    <td id="20"></td>
                                </tr>
                                <tr>
                                    <td id="21"></td>
                                    <td id="22"></td>
                                    <td id="23"></td>
                                    <td id="24"></td>
                                    <td id="25"></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className={cx('Game_status')}>
                            <div className={cx('batting-status')}>
                                <div className={cx('col', 'left')}>
                                    <span className={cx('user','next')}>Next:</span>
                                    <div id="next">0</div>
                                </div>
                                <div className={cx('col', 'right')}>
                                    <span className={cx('user','stake')}>Stake:</span>
                                    <div id="stake">0</div>
                                </div>
                                <div className={cx('col','button')}>
                                    <button id="CashOut" onClick={handleCashOut}>Cashout</button>
                                </div>
                            </div>
                            <div className={cx('User-Yam')}>
                                <div className={cx('yam')}>{UserYam}</div>
                                <div>Yam 을 가지고 있습니다.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('notice')}>
                게임종료시 꼭 캐시아웃을 해주시기 바랍니다.
            </div>
        </div>
    );
};

export default Minesweeper;