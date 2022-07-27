import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { getPostDetails } from "../services/post";

export const Single = () => {
    const { slug } = useParams();

    useEffect(() => {
        getPostDetails(slug).then(res=> {
            console.log(res)
        })
    }, [slug])

    return (
        <div className="single">
            adadsad
        </div>
    )
}