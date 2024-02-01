import { fetchPost } from "./postsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ReactionButton from "./ReactionButton";
import AddPostForm from "./AddPostForm";
import Users from "../users/Users";

const PostsList = (props) => {

    const posts = useSelector((state) => state.posts.posts);
    const postStatus = useSelector((state) => state.posts.status);
    const author = useSelector((state) => state.posts.author);
    const dispatch = useDispatch();
    console.log(posts);

    useEffect(() => {
        dispatch(fetchPost())
    },[])

    if(postStatus === 'loading') return <p>Loading ...</p>
    if(postStatus === 'failed') return <p>Something went wrong</p>

    // const filter = posts.filter(post => {
    //     if(author != -1) return post.userId == author;
    //     return post
    // })

    const renderPosts = posts.filter(post => {
        if(author != -1) return post.userId == author;
        return post
    }).map(post => {
        return (
            <article key={post.id}>
                <h3>{post.title}</h3>
                <ReactionButton post={post}/>
            </article>
        )
    })

    return(
        <div>
            <AddPostForm/>
            <Users/>
            <h1>Posts</h1>
            <section>
            {renderPosts}
            </section>
        </div>
    );
}

export default PostsList