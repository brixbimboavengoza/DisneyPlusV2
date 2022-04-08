import React from 'react'
import { Container, Item, Border, Image1 } from '../styles/GlobalStyles';

export default function SearchResult({movies}) {
  return (
        <>
            <h1>Explore</h1>
            <Container>
                {movies.filter(movie => movie.poster_path !== null).map(m =>
                    <Item key={m.id}>
                        <Border>
                            <Image1 src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}/>
                        </Border>
                    </Item>    
                )}
            </Container>
        </>
  )
}
