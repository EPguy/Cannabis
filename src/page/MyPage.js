import React from 'react';
import MyPageContainer from 'containers/MyPageContainer/MyPageContainer';
import HeaderContainer from 'containers/common/HeaderContainer';
import UserInterfaceContainer from 'containers/UserInterfaceContainer/UserInterfaceContainer';

const MyPage = () => {
    return (
        <div>
            <HeaderContainer UserInterface={<UserInterfaceContainer/>}/>
            <MyPageContainer/>
        </div>
    );
};

export default MyPage;