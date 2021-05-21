import './Menu.css'
import React from "react"

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/conteudo01/ADM - Anthony">Conteúdo 01</a>
                </li>
                <li>
                    <a href="/conteudo02">Conteúdo 02</a>
                </li>
                <li>
                    <a href="/conteudo03">Conteúdo 03</a>
                </li>
                <li>
                    <a href="/conteudo04">Conteúdo 04</a>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu