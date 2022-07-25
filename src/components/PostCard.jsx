import { Link } from "react-router-dom"

export const PostCard = ({
    image,
    title,
    slug
}) => {
    return (
        <Link to={`/post/${slug}`} title={title}>
            <article className="card">
                <img src={image.src} alt={image.alt} className="card-image"/>
                <div className="card-body p-15">
                    <h2 className="title-card">{title}</h2>
                    <small className="date-card">ontem</small>
                </div>
            </article>
        </Link>
    )
}