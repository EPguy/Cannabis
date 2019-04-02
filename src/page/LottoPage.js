import React from 'react';
import HeaderContainer from 'containers/common/HeaderContainer';
import UserInterfaceContainer from 'containers/UserInterfaceContainer/UserInterfaceContainer';
import Lotto from 'containers/Lotto/Lotto';

const LottoPage = () => {
    return (
        <div>
            <HeaderContainer UserInterface={<UserInterfaceContainer/>}/>
            <Lotto/>
        </div>
    );
};

export default LottoPage;