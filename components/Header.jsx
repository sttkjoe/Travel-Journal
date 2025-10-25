import globe_icon from "/White_Globe_Icon.png"

export default function Header()
{
    return(
        <header>
            <img src={globe_icon} alt="globe-icon" />
            <span>my travel journal.</span>
        </header>
        
    )
}