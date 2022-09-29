import { postNewComment } from "../utils/api"
import { useState } from "react"
import { getArticleComments } from "../utils/api"

export const NewCommentForm =({articleId, setArticleComments, setIsLoading}) => {

    const [userName, setUserName] = useState("")
    const [commentBody, setCommentBody] = useState("")
    const [postSuccessful, setPostSuccessful] =useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(articleId)
        postNewComment(articleId, commentBody, userName)
        .then((data) => {
            setPostSuccessful(true)
            setUserName("")
            setCommentBody("")
            getArticleComments(articleId)
            .then((data) => {
                setArticleComments(data.data)
                setIsLoading(false);
            })
        })
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
                <label>UserName: <span className="required">*</span>
                <input required type="text" value={userName} name="name"
                       onChange={(e) => setUserName(e.target.value)} className="field-long"/></label>
            </li>
            <li>
                <label>Comment <span className="required">*</span>
                <input required type="text" value={commentBody} name="description"
                       onChange={(e) => setCommentBody(e.target.value)} className="field-tall"/></label>
            </li>
            <li>
                <input type="submit" value="Post Comment"/>
            </li>
        </ul>
    </form>
    )
}