import gps_PNG from "/gps_PNG.png"

export default function MainContent(props)
{
    return(
        <article className="journal-entry">
            <div className="img-container">
                <img src={props.locationImg} alt="Location image" className="location-img" />
            </div>
            <div className="location-details">
                <img src={gps_PNG} alt="gps-icon" className="gps-icon" />
                <span className="location-country">{props.locationCountry}</span>
                <a href={props.location}>View on Google Maps</a>
                <h1 className="location-name">{props.locationName}</h1>
                <p className="date">{props.date}</p>
                <p className="location-desc">{props.locationDesc}</p>
            </div>
            
        </article>
    )
}