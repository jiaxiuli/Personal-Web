import React from 'react';

const IntroItems = ({ iconPath, content }) => {

    return (
        <div style={{
            width: 'auto',
            display: 'flex',
            alignItems: 'center',
            marginLeft: '8px',
            padding: '4px 0px'
        }}>
            <div 
                style={{ 
                    minWidth: '8px',
                    minHeight: '8px',
                    maxWidth: '8px',
                    maxHeight: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#1A1380' 
                }}
            >
            </div>
            <img src={iconPath} style={{
                width: '22px',
                height: '22px',
                margin: '0px 16px',
            }}/>
            <div>{content}</div>
        </div>
    );
};

export default IntroItems;