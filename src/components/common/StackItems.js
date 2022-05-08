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
                    style={{
                        width: 30,
                        height: 30,
                        marginRight: '12px'
                    }}/>
                <StyledTextContainer fontWeight={500}>{title}</StyledTextContainer>
            </div>
            <div
                style={{
                    marginLeft: '42px'
                }}
            >
                <StyledTextContainer fontSize={16}>{items.join(' | ')}</StyledTextContainer>
                <div>
                    {
                        languages.map((item) => (
                                 <img
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