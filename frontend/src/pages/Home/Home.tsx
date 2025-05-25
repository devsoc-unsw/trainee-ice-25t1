import { useState } from "react";
import SearchBar from "../../components/SearchBar/Searchbar";
import SubjectPanel from "../../components/SubjectPanel/SubjectPanel";
import { StyledDiv, StyledH1 } from "./HomeStyles";

const Home = () => {
    const [inputText, setInputText] = useState("");

    return (
        <StyledDiv>
            <StyledH1>🏠 Home Page 🏠</StyledH1>
            <SearchBar  inputText={inputText} setInputText={setInputText} />
            <SubjectPanel inputText={inputText} />
        </StyledDiv>
    );
}

export default Home;
