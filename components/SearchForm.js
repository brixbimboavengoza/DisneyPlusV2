import { connect } from 'react-redux'
import styled from 'styled-components'

const SearchForm = () => {

    return (
        <Wrap>
            <input type="text" spellCheck={false} placeholder='Search by title, character, or genre'/>
        </Wrap>
    )
}

export default SearchForm

const Wrap = styled.div`
    background: linear-gradient(0deg, #585a6b, #3d404c);
    height: 100px;
    display: flex;
    
    input {
        width: 92%;
        max-width: 1400px;
        margin: auto;
        color: #dfdfdf;
        height: 100%;
        padding: 0 10px;
        margin: auto;
        background: none;
        height: inherit;
        border: none;
        outline: none;
        font-size: 3rem;

        &::placeholder {
            color: #dfdfdf;
        }
    }
`;