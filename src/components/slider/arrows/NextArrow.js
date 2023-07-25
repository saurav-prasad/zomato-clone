import React from 'react'

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={
                {
                    ...style,
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }
            onClick={onClick}
        >
        </div>
    );
}

export default NextArrow