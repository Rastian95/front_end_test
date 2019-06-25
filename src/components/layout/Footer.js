import React from 'react'

export default function Footer() {
    return (
        <footer style={footerStyle}>
            <div>
                <p style={lorem}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a style={links}>Terms | Privacy</a>
            </div>
        </footer>
    )
}

const lorem={
    fontFamily: 'HelveticaNeue',
    fontSize: '15px',
    color: '#999999',
    letterSpacing: 0,
    lineHeight: '20px'
}

const footerStyle={
    bottom: '0',
    position: 'fixed',
    background: "#FFFFFF",
    textAlign: 'center',
    height: '65px'
}

const links={
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: '14px',
    color: '#004A80',
    letterSpacing: 0
}
