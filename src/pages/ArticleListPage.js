import React from "react";
import { useParams, Link } from "react-router-dom";
import '../App.css';
import { getArticleTeasersInfo } from '../utils/imageExtraction';
import HeaderComponent from "../components/header";
import ArticleTeaserList from "../components/ArticleTeaserList";

const ArticleListPage = () => {

  let { section } = useParams();
  let teasersInfoList = getArticleTeasersInfo(section);

  return (
    <div>
      <HeaderComponent />
      <div className="centerMid">
        <ArticleTeaserList section={section} />
      </div>
    </div>
  );
}

export default ArticleListPage;