import React from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleTeasersInfo } from '../utils/imageExtraction';

const ArticleTeaserList = ({ section }) => {

    let jsxList = [];
    let teasersInfoList = getArticleTeasersInfo(section);

    console.log(teasersInfoList);

    teasersInfoList.forEach(article => {
        let pathToArticle = "/" + section + "/articles/" + article.id;
        jsxList.push(
            <div className="articleTeaser">
                <Link to={pathToArticle} className="articleTeaserLink">

                    <div className="articleListText">
                        <div className="imageBoxArticle"></div>
                        <div className="textBoxArticle">
                            <p className="articleTeaserText">{article.title.substring(0, 50) + "..."}</p>
                            <p className="articleTeaserText">{article.body.substring(0, 200) + "..."}</p>
                        </div>
                    </div>
                </Link>

            </div>
        )
    });

    //<div src={article.imageUsed.url} className="articleTeaserImage"></div>

    return (
        jsxList
    )
}

export default ArticleTeaserList;