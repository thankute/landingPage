import './ShowCard.scss'

function ShowCard({ image, title, children }) {
    return (
        <div className="showCard-item">
            <img src={image} alt="" />
            <h4 className="showCard-name">{title}</h4>
            <p className="showCard-description">
                {children}
            </p>
        </div>
    )
}

export default ShowCard