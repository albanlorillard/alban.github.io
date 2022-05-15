import * as React from "react"
import './header.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HeaderComponent = ({headerAvatar, headerName, headerDescription, headerContact}) => {

    return (
        <header class="mainPage-header">
            <GatsbyImage
                class="header-avatar"
                image={getImage(headerAvatar.localFile)}
                alt={headerAvatar.alternativeText}
            />

            <h1 class="header-name">{headerName}</h1>
            <p class="header-description">{headerDescription}</p>

            <ul class="header-contact">
                {headerContact.map((contact) => {
                    return (<li><a href={contact.linkUrl}>{contact.linkName}</a></li>)

                })}
            </ul>
        </header>
    )
};

export default HeaderComponent;