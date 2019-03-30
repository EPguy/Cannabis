import React from 'react';
import HeaderContainer from 'containers/common/HeaderContainer';
import UserInterfaceContainer from 'containers/UserInterfaceContainer/UserInterfaceContainer';
import Shop from 'component/common/Shop';

const ShopPage = () => {
    return (
        <div>
            <HeaderContainer UserInterface={<UserInterfaceContainer/>}/>
            <Shop/>
        </div>
    );
};

export default ShopPage;