/*
 * @Author: 李佳修
 * @Date: 2022-05-10 09:18:42
 * @LastEditTime: 2022-05-29 16:48:14
 * @LastEditors: 李佳修
 * @FilePath: /Personal-Web/src/components/common/IntroItems.js
 */
import React from 'react';

const IntroItems = ({ iconPath, content, fromAbout=true, showIcon=true }) => {

    return (
        <div style={{
            width: 'auto',
            display: 'flex',
            alignItems: 'center',
            marginLeft: fromAbout ? '8px' : '0px',
            padding: fromAbout ? '10px 0px' : '2px'
        }}>
            <div 
                style={{
                    display: fromAbout ? 'block' : 'none',
                    minWidth: '8px',
                    minHeight: '8px',
                    maxWidth: '8px',
                    maxHeight: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#1A1380',
                    marginRight: showIcon ? '0px' : '12px'
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
                    display: showIcon ? 'inline' : 'none'
                }}/>
            <div>{content}</div>
        </div>
    );
};

export default IntroItems;