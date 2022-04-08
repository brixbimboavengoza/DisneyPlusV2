import React from 'react';
import styled from 'styled-components';
import SearchForm from '../components/SearchForm';
import Popular from '../components/movieList/Popular'

const search = () => {
    return (
        <Container>
            <SearchForm/>
            <Explore>
            {/* {movies.length > 0 && 
                <SearchResult movies={movies}/> 
            } */}
            <Popular limit={10}/>
            </Explore>
        </Container>
    )
}

export default search;

const Container = styled.div`
    position: relative;
    top: 90px;
    color: #dfdfdf;
`;

const Explore = styled.div`
    width: 90%;
    margin: auto;
    font-size: 1.3rem;
    max-width: 1400px;
`;
