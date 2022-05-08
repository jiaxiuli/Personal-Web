import React from 'react';

const IntroItems = ({ iconPath, content, fromAbout=true }) => {

    return (
        <div style={{
            width: 'auto',
            display: 'flex',
            alignItems: 'center',
            marginLeft: fromAbout ? '8px' : '0px',
            padding: fromAbout ? '4px 0px' : '0px'
        }}>
            <div 
                style={{
                    display: fromAbout ? 'block' : 'none',
                    minWidth: '8px',
                    minHeight: '8px',
                    maxWidth: '8px',
                    maxHeight: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#1A1380' 
                }}
            >
            </div>
            <img
                alt={'icon'} 
                src={iconPath} 
                style={{
                    width: fromAbout ? '22px' : '16px',
                    height: fromAbout ? '22px' : '16px',
                    marginLeft: fromAbout ? '16px' : '0px',
                    marginRight: fromAbout ? '16px' : '8px',
                }}/>
            <div>{content}</div>
        </div>
    );
};

export default IntroItems;