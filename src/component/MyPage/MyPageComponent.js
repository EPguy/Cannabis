import React from 'react';
import styles from './MyPage.scss';
import classNames from 'classnames/bind';
import realnameImage from 'image/realname.png';
import lottery from 'image/lottery.png';
import chip from 'image/chip.png';
import megaphone from 'image/megaphone.png';

const cx = classNames.bind(styles);

const MyPage = ({ChangeButtonClick, ChangeProfile, onHover, onMouseOut, randNum, profile, yam, nickname, realname}) => {
    console.log(profile);

    const LottoBall = [10,20,30,40,21,1].map((v,i)=> {
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
        <div>
            <div className={cx('list')}>
                <div className={cx('list-title')}> 내 정보 </div>
                <div className={cx('Items')}>
                    <div className={cx('profile-manager')}>
                        <img className={cx('user-profile')} src={profile}/>
                        <form id="twit-form" onSubmit={ChangeProfile} target="ifrm" action='http://18.220.117.207:5000/user/dev/img' method='post' encType='multipart/form-data'>
                            <div className={cx('input-group')}>
                                <label id="upload_label" for="img">이미지 바꾸기</label>
                                <input onChange={ChangeProfile} name="img" id="img" accept="image/*" type="file"/>
                                <input type="text" id="upload_name" readonly="readonly"></input>
                                <button id="image-submit" onClick={ChangeButtonClick} type="submit" >저장</button>
                                
                            </div>
                        </form>
                        <iframe name='ifrm' width='0' height='0' frameborder='0'></iframe>
                    </div>
                    <div className={cx('user-info')}>
                        <div className={cx('info-list')}>
                            <div id="realname">이름 :</div><div className={cx('info-text')}> {realname}</div>
                        </div>
                        <div className={cx('info-list')}>
                            <div id="nickname">닉네임 : </div><div className={cx('info-text')}>{nickname}</div>
                        </div>
                        <div className={cx('info-list')}>
                            <div id="yam">yam : </div><div className={cx('info-text')}>{yam}</div>
                        </div>
                    </div>
                </div>
                <div className={cx('list-title')}> 보유 아이템 </div>
                <div className={cx('Items')}>
                    <div id="realname" onMouseOver={onHover} onMouseOut={onMouseOut} className={cx('item')}>
                        <div className={cx('front')}>
                            <img src={realnameImage}/>
                            <div id="number">x 1</div>
                        </div>
                        <button>사용하기</button>
                        <div id="wrapper" className={cx('content-wrapper')}>
                            <div id="text" className={cx('content')}>
                                <div className={cx('item-title')}>실명 밝혀버리기~</div>
                                <span className={cx('description')}>원하는 유저의 실명을 알 수 있습니다.</span>
                            </div>
                        </div>
                    </div>
                    <div id="Lottery" onMouseOver={onHover} onMouseOut={onMouseOut} className={cx('item')}>
                        <div className={cx('front')}>
                            <img src={lottery}/>
                            <div id="number">x 1</div>
                        </div>
                        <button>사용하기</button>
                        <div id="wrapper" className={cx('content-wrapper')}>
                            <div id="text" className={cx('content')}>
                                <div className={cx('item-title')}>복권</div>
                                <span className={cx('description')}>30%확률로 5000yam을 획득할 수 있습니다.</span>
                                <span className={cx('description')}>복권 한개당 1000yam 입니다.</span>
                            </div>
                        </div>
                    </div>
                    <div onMouseOver={onHover} onMouseOut={onMouseOut} className={cx('item')}>
                        <div className={cx('front')}>
                            <img src={chip}/>
                            <div id="number">x 1</div>
                        </div>
                        <button>환전하기</button>
                        <div id="wrapper" className={cx('content-wrapper')}>
                            <div id="text" className={cx('content')}>
                                <div className={cx('item-title')}>칩</div>
                                <span className={cx('description')}>인디언 포커에서 yam 대신 사용되는 칩입니다.</span>
                                <span className={cx('description')}>칩 하나당 1000yam입니다.</span>
                            </div>
                        </div>
                    </div>
                    <div onMouseOver={onHover} onMouseOut={onMouseOut} className={cx('item')}>
                        <div className={cx('front')}>
                            <img src={megaphone}/>
                            <div id="number">x 1</div>
                        </div>
                        <button>사용하기</button>
                        <div id="wrapper" className={cx('content-wrapper')}>
                            <div id="text" className={cx('content')}>
                                <div className={cx('item-title')}>확성기</div>
                                <span className={cx('description')}>자신이 하고싶은 말을 적으면 메인페이지에 올라가 모두가 볼 수 있다.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="Lotto-list" className={cx('list')}>
                <div className={cx('list-title')}> 구매 한 로또 번호 </div>
                <div className={cx('Items')}>
                    <div className={cx('LottoBall-wrapper')}>{LottoBall}</div>
                </div>
            </div>
        </div>
    );
};

export default MyPage;