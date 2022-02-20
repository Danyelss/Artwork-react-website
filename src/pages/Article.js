import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import '../App.css';
import { getArticleInfoById } from '../utils/imageExtraction';
import DynamicGallery from "../components/DynamicGallery";
import HeaderComponent from "../components/header";

const ArticlePage = () => {
  let { section, id } = useParams();
  //console.log(getArticleInfoById(section, id));

  let articleInfo = getArticleInfoById(section, id);

  return (
    <div>
      <HeaderComponent />
      <div className="articleBox">
        <h1 className="articleTitle">{articleInfo.title}</h1>
        <p className="articleBody">{articleInfo.body}</p>
      </div>
      <DynamicGallery photos={articleInfo.list} lastIsFirst={false} fromArticle={true} />
    </div>
  );
}

export default ArticlePage;