import { React, useState } from "react";
import '../App.css';
import HeaderComponent from "../components/header";

const UploadPage = () => {
    const [isOff, setIsOff] = useState(true);

    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    let numbers = [1, 2, 3, 4, 5];
    let listItems = numbers.map((number, index) =>
        <li className="UploadText" key={index} >{number}</li>
    );


    const handleSubmit = async e => {
        e.preventDefault();

        //alert();
        numbers.push(6);
        let listItems = numbers.map((number, index) =>
        <li className="UploadText" key={index} >{number}</li>
    );
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

                <div className="uploadSpacer">{title}</div>

                <button className="uploadButton" type="submit" onSubmit={handleSubmit}>Post</button>

                {listItems}
            </form>
        </div>
    );
}

export default UploadPage; 