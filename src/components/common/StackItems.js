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
            padding: '4px 0px'
        }}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'flex-start'
                }}
            >
                <img
                    src={iconPath}
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