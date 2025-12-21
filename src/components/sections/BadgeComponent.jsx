const badgeStyle = {
    position: 'absolute',
    zIndex: 10,
    top: "0px",
    right: "0px",
    bottom: "auto",
    left: "auto",

    width: "18px",
    height: "18px",

    backgroundColor: 'red',
    borderRadius: '50%',
};

const BadgeComponent = ({ size = "18px", top, left, right, bottom }) => {
    console.log(top);

    return (
        <div style={{ ...badgeStyle, width: size, height: size, top: `${top}`, left: `${left}`, right: `${right}`, bottom: `${bottom}` }}></div>
    )
}

export default BadgeComponent