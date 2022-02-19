import { React, useState } from "react";
import '../App.css';
import HeaderComponent from "../components/header";

const UploadPage = () => {
    const [isOff, setIsOff] = useState(true);

    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [urlArray, setUrlArray] = useState([]);

    const [urlText, setUrlText] = useState();
    const [urlDescription, setUrlDescription] = useState();

    let displayUrlFields = urlArray.map((field, index) =>
        <div className="urlElementContainer" key={index} >
            <h1 className="uploadUrlsView" >Url: {field["url"]} - Desc: {field["description"]}</h1>
            <button className="deleteButton" type="button">Delete</button>
        </div>
    );

    const addField = async e => {
        setUrlArray(urlArray => [...urlArray, { "url": urlText, "description": urlDescription }]);

        setUrlText("");
        setUrlDescription("");

        console.log(urlArray);

    }

    const handleSubmit = async e => {
        e.preventDefault();

    }

    return (
        <div>
            <HeaderComponent />
            <form className="uploadContainer" onSubmit={handleSubmit}>
                <button className="uploadButton" onClick={() => setIsOff(!isOff)}>{isOff ? "metalo" : "painting"}</button>

                <label>
                    <div className="UploadText">Title</div>
                    <div className="uploadSpacer"></div>

                    <textarea className="uploadInput uploadTitleBox"
                        type="text" onChange={e => setTitle(e.target.value)} />
                </label>

                <div className="uploadSpacer"></div>

                <label>
                    <div className="UploadText">Content</div>
                    <div className="uploadSpacer"></div>
                    <textarea className="uploadInput uploadContextBox"
                        type="password" onChange={e => setContent(e.target.value)} />
                </label>

                <div className="uploadSpacer"></div>
                <div className="uploadSpacer"></div>

                {displayUrlFields}

                <div>
                    <textarea className="uploadInput uploadUrlBox"
                        type="text" onChange={e => setUrlText(e.target.value)} />
                    <textarea className="uploadInput uploadUrlBox"
                        type="text" onChange={e => setUrlDescription(e.target.value)} />
                </div>

                <button className="urlButton" type="button" onClick={addField}>+</button>

                <button className="uploadButton" type="submit" onSubmit={handleSubmit}>Post</button>
            </form>
        </div>
    );
}

export default UploadPage; 