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
                        <div className="imageBoxArticle">
                            <img src={article.imageUsed.url} className="articleTeaserImage"></img>
                        </div>
                        <div className="textBoxArticle">
                            <p className="articleTeaserText">{article.title.substring(0, 100) + "..."}</p>
                            <p className="articleTeaserText">{article.body.substring(0, 300) + "..."}</p>
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