import React from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleTeasersInfo } from '../utils/imageExtraction';

const ArticleTeaserList = ({section}) => {
    
    let jsxList = [];
    let teasersInfoList = getArticleTeasersInfo(section);

    console.log(teasersInfoList);

    teasersInfoList.forEach(article => {
        let pathToArticle = "/" + section + "/articles/" + article.id;
        jsxList.push(
            <Link to={pathToArticle} className="articleTeaserLink">
                <div className = "articleTeaser">
                    <img src = {article.imageUsed.url} className="articleTeaserImage"></img>
                    <p className="articleTeaserText">{article.body}</p>
                </div>
            </Link>
        )
    });

    return(
        jsxList
    )
}

export default ArticleTeaserList;