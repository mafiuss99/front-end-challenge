import { useState, useEffect } from 'react';
import { PostCard } from '../components/PostCard';
import { getCategoryPosts } from '../services/category';
import { handlePostCardImage } from '../utils/helpers';

export const Home = () => {
    const [posts, setPosts] = useState([]);
    const [postsPage, setPostsPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
            setLoading(true);
            getCategoryPosts(518, 1).then(res => {
                setPosts(res);
                setLoading(false);
            }).catch(() => {
                setError(true);
                setLoading(false);
            });    
    }, []);

    const nextPage = () => {
        if(!loading) {
            setLoading(true);
            const nextPage = postsPage + 1;
            setPostsPage(nextPage);
            getCategoryPosts(518, postsPage).then(res => {
                setPosts([...posts, ...res]);
                setLoading(false);
            }).catch(() => {
                setError(true);
                setLoading(false);
            });   
        }   
    }

    return (
        <div className="home">
            <div className="list-posts">
                { loading && <h2>Carregando</h2>}
                { !loading && error && <h2>Ops. Parece que tivemos um problema</h2>}
                { !loading && !error && posts?.length > 0 && (
                    <>
                        {posts.map((post, i) => 
                            <PostCard
                                image={{
                                    src: handlePostCardImage(post?._embedded), 
                                    alt: post?.title?.rendered
                                }}
                                title={post?.title?.rendered}
                                slug={post?.slug}
                                key={`post-${i}`}
                            />
                        )}

                        <button onClick={() => nextPage()}>
                            Carregar mais
                        </button>
                    </>
                )}
            </div>        
        </div>
    )
}