import React from 'react'
import PrimaryNav from './PrimaryNav'

export default function Header() {
    return (
        <header>
            <PrimaryNav />
            <nav className="secondary-navigation">
                <ul class="search-types">
                    <li><a className="search-type active" href="#"><i className="fa fa-search"></i><span>All</span></a></li>
                    <li><a className="search-type " href="#"><i className="fa fa-newspaper"></i><span>News</span></a></li>
                    <li><a className="search-type " href="#"><i className="fa fa-map-marked"></i><span>Maps</span></a></li>
                    <li><a className="search-type " href="#"><i className="fa fa-video"></i><span>Videos</span></a></li>
                    <li><a className="search-type " href="#"><i className="fa fa-images"></i><span>Images</span></a></li>
                    <li><a className="search-type " href="#"><i className="fa fa-ellipsis-v"></i><span>More</span></a></li>
                 </ul>
                <ul className="configuration">
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Tools</a></li>
                </ul>
            </nav>
        </header>
    )
}
