/**
 * 
 * @param {int} id - Id da categoria
 * @param {int} page - Número da página corrente
 * @returns 
 */
export const getCategoryPosts = (id, page) => {
    return fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=${id}&page=${page}`).then((res) => res.json());
}