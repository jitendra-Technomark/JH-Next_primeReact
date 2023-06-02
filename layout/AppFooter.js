import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="layout-footer">
            {/* <img src={`/layout/images/logo-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.svg`} alt="Logo" height="20" className="mr-2" /> */}
            Created by&nbsp;
            <span style={{fontFamily:"BestermindRegular", fontWeight:"bolder", fontSize:"1.2rem"}}>Jitendra</span>&nbsp; & &nbsp;<span style={{fontFamily:"BestermindRegular", fontWeight:"bolder", fontSize:"1.2rem"}}>Harsh</span>
        </div>
    );
};

export default AppFooter;
