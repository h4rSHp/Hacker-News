import React from 'react'

export default function HeadingContainer() {
    let styleWrapper = { textAlign: 'center', color: 'white', padding: '16px 0', borderBottom: '2px solid white', fontSize: '40px', backgroundColor: 'rgb(15, 37, 77)', }
    return (
        <div style={styleWrapper}>
            <span>HACKER NEWS</span>
        </div>
    )
}
