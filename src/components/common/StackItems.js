/*
 * @Author: 李佳修
 * @Date: 2022-05-09 09:25:56
 * @LastEditTime: 2022-05-29 16:51:58
 * @LastEditors: 李佳修
 * @FilePath: /Personal-Web/src/components/common/StackItems.js
 */
import React from 'react';
import style from './common.less';
import StyledTextContainer from './StyledTextContainer';

const StackItems = ({
    iconPath,
    title,
    items=[],
    languages=[]
}) => {
    return (
        <div style={{
            width: 'auto',
            marginLeft: '8px',
            padding: '16px 0px'
        }}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'flex-start'
                }}
            >
                <img
                    src={iconPath}
                    alt={'tech logo'}
                    className={style['img-icon']}
                    style={{
                        // width: 30,
                        // height: 30,
                        // marginRight: '12px'
                    }}
                />
                <StyledTextContainer fontWeight={500}>{title}</StyledTextContainer>
            </div>
            <div className={style['stack-detail']}>
                <StyledTextContainer fontSize={16}>{items.join(' | ')}</StyledTextContainer>
                <div>
                    {
                        languages.map((item) => (
                                 <img
                                    alt={item.name}
                                    key={item.name}
                                    title={item.name}
                                    src={item.path}
                                    className={style['img-list']}
                                />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default StackItems;