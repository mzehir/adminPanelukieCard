import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <div className="col-md-2">
                <div className="list-group mt-5">
                    <a href="/adminPaneli/homePage" className="list-group-item list-group-item-action mb-4 shadow-lg p-3 bg-white rounded">Anasayfa / Home</a>

                    <a href="/adminPaneli/aboutPage" className="list-group-item list-group-item-action mb-4 shadow-lg p-3 bg-white rounded">Hakkımda / About</a>

                    <a href="/adminPaneli/resumePage" className="list-group-item list-group-item-action mb-4 shadow-lg p-3 bg-white rounded">CV / Resume</a>

                    <a href="/adminPaneli/portfolioPage" className="list-group-item list-group-item-action mb-4 shadow-lg p-3 bg-white rounded">Ürünlerim / Portfolio</a>

                    <a href="/adminPaneli/blogPage" className="list-group-item list-group-item-action mb-4 shadow-lg p-3 bg-white rounded">Yazılarım / Blog</a>

                    <a href="/adminPaneli/contactPage" className="list-group-item list-group-item-action mb-4 shadow-lg p-3 bg-white rounded">İletişim / Contact</a>
                </div>
            </div>
        )
    }
}
