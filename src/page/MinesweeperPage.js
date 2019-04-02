import React from 'react';
import HeaderContainer from 'containers/common/HeaderContainer';
import MinesweeperContainer from 'containers/MinesweeperContainer';
import UserInterfaceContainer from 'containers/UserInterfaceContainer/UserInterfaceContainer';

const MinesweeperPage = () => {
    return (
    <div>
        <HeaderContainer UserInterface={<UserInterfaceContainer/>}/>
        <MinesweeperContainer/>
    </div>
    );
};

export default MinesweeperPage;