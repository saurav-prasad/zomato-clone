import React from 'react'

function PreviousArrow(props) {
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

export default PreviousArrow