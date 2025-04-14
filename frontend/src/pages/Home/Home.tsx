import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/Searchbar";
import SubjectPanel from "../../components/SubjectPanel/SubjectPanel";



function Home() {
    const [inputText, setInputText] = useState("");

    return (
        <div>
            <h1>🏠 Home Page :D</h1>
            <SearchBar  inputText={inputText} setInputText={setInputText} />
            <SubjectPanel inputText={inputText} />
        </div>
    );
}

export default Home;
