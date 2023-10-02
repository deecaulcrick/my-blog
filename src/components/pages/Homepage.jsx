import React from 'react'
import LatestPosts from '../ui/LatestPosts'

function Homepage() {
    return (
        <div className="homepage">
            <div className="about">
                <p>Hello, I am Deborah, “Dee” Caulcrick, a designer, teacher and front-end engineer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="home-links">
                <ul>
                    <li><a href='https://github.com/deecaulcrick' target='_blank'>Github</a></li>
                    <li><a href='https://twitter.com/deecaulcrick' target='_blank'>Twitter</a></li>
                    <li><a href='https://linkedin.com/in/deborah-caulcrick' target='_blank'>LinkedIn</a></li>
                    <li><a href='https://instagram.com/deecaulcrick' target='_blank'>Instagram</a></li>
                </ul>
            </div>
            <LatestPosts />
        </div>
    )
}

export default Homepage