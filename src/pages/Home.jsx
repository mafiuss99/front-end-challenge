import { useState, useEffect } from 'react';
import { PostCard, PostCardSkeleton } from '../components/PostCard';
import { getCategoryPosts } from '../services/category';
import { handlePostCardImage } from '../utils/helpers';

export const Home = () => {
    const [posts, setPosts] = useState([]);
    const [postsPage, setPostsPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setError(false);

        getCategoryPosts(518, 1).then(res => {
            setPosts(res);
        }).catch(() => {
            setError(true);
        });    
    }, []);

    const nextPage = () => {
        setError(false);

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
                { loading && (
                    <div className='list-posts'>
                        <PostCardSkeleton/>
                        <PostCardSkeleton/>
                        <PostCardSkeleton/>
                        <PostCardSkeleton/>
                        <PostCardSkeleton/>
                        <PostCardSkeleton/>
                        <PostCardSkeleton/>
                        <PostCardSkeleton/>
                        <PostCardSkeleton/>
                        <PostCardSkeleton/>
                    </div>
                )}
                { !loading && !error && posts?.length > 0 && (
                    <>
                        <div className="list-posts">
                            {posts.map((post, i) => 
                                <PostCard
                                    image={{
                                        src: handlePostCardImage(post?._embedded), 
                                        alt: post?.title?.rendered
                                    }}
                                    title={post?.title?.rendered}
                                    slug={post?.slug}
                                    date={post?.date}
                                    key={`post-${i}`}
                                />
                            )}
                            
                        </div>

                        <div className="pagination">
                            <button className="btn btn-primary" onClick={nextPage}>Carregar Mais</button>
                        </div>
                    </>
                )}
                { !loading && error && <h2>Ops. Parece que tivemos um problema</h2>}

            </div>        
    )
}