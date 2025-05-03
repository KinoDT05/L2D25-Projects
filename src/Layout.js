const dongle = {
    fontFamily: ("Dongle", "serif"),
    fontWeight: 700,
    fontStyle: "normal"
};

const contentStyle = {
    flexGrow: "50",
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    minHeight: "50vh",
    color: "white",
    textAlign: "center",
    fontSize: "300%",
    fontFamily: dongle,
    lineHeight: "102%",
    letterSpacing: "3px"
};

const footerStyle = {
    background: "black",
    color: "#8b5542",
    textAlign: "center",
    padding: "15px",
    fontFamily: "Dongle"
};

const bodyStyle = {
    background: "#f9cb8b"
};



function Layout(props){
    return (
        <div>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Dongle:wght@700&family=Mochiy+Pop+P+One&display=swap"></link>
            </head>
            <body style = {bodyStyle}>HELLO</body>
            <p style = {contentStyle}> { props.children } </p>
            <footer style = {footerStyle}>  
                Learn 2 Dev:
                Bangco, Palmiano, Cabataña, Reyes
            </footer>
        </div>
    );
}
export default Layout;
