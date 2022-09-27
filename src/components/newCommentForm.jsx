import { postNewComment } from "../utils/api"
import { useState } from "react"

export const NewCommentForm =(articleId) => {

    const [userName, setUserName] = useState("")
    const [commentBody, setCommentBody] = useState("")
    const [postSuccessful, setPostSuccessful] =useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(articleId.articleId)
        postNewComment(articleId.articleId, commentBody, userName)
        .then(
            setPostSuccessful(true),
            setUserName(""),
            setCommentBody("")
        )
    }

    const anotherComment = () => {
        setPostSuccessful(false)
    }

    if (postSuccessful) {return (
        <div>
            <p>Comment succesfully posted</p>
            <button onClick={anotherComment}>Post New Comment</button>
        </div>
    )}

    return(
        <form onSubmit={handleSubmit}>
        <ul className="form-style-1">
            <li><h2>Post a Comment</h2></li>
            <li>
                <label>UserName: <span className="required">*</span></label>
                <input type="text" value={userName} name="name"
                       onChange={(e) => setUserName(e.target.value)} className="field-long"/>
            </li>
            <li>
                <label>Comment <span className="required">*</span></label>
                <input type="text" value={commentBody} name="description"
                       onChange={(e) => setCommentBody(e.target.value)} className="field-tall"/>
            </li>
            <li>
                <input type="submit" value="Post Comment"/>
            </li>
        </ul>
    </form>
    )

}