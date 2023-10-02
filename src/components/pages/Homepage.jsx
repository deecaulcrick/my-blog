import React from 'react'
import LatestPosts from '../ui/LatestPosts'

function Homepage() {
    return (
        <div className="homepage">
            <div className="about">
                <p>Hello, I am Deborah, “Dee” Caulcrick, a designer, teacher and front-end enthusiast. When I am not attending my CS classes (UNILAG), I build UIs, design wedding stationery, build Notion templates, and teach kids to code. <br /> <br />
                    And when I am not doing any of those, I write, watch movies, and make memes.</p>
            </div>
            <div className="home-links">
                <ul>
                    <li><a href='mailto:deecaulcrick@gmail.com' target='_blank'>Email</a></li>
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