import { addReaction } from "./postsSlice";
import { useDispatch } from "react-redux";

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
};

const ReactionButton = ({post}) => {

    const dispatch = useDispatch()

    const renderReactions = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return(
            <button onClick={() => dispatch(addReaction({id:post.id, name}))} key={name} className="reactionButton">
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return(
        <div>{renderReactions}</div>
    )
}

export default ReactionButton