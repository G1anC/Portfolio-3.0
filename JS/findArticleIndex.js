export function findArticleIndex()
{
    const articles = document.getElementsByTagName("section");

    for (const article of articles)
        if (article.dataset.status === "active")
            return article.dataset.index;
    return -1;

}