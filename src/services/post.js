/**
 * 
 * @param {string} slug - slug do post
 * @returns 
 */
 export const getPostDetails = (slug) => {
    return fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`).then((res) => res.json());
}