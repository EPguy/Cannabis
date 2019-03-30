import React from 'react';
import MyPageComponent from 'component/MyPage';
import HeaderContainer from 'containers/common/HeaderContainer';
import UserInterfaceContainer from 'containers/UserInterfaceContainer/UserInterfaceContainer';

const MyPage = () => {
    return (
        <div>
            <HeaderContainer UserInterface={<UserInterfaceContainer/>}/>
            <MyPageComponent/>
        </div>
    );
};

export default MyPage;