import React, { useEffect } from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUpcomingMovies } from '../../src/redux/actions/upcomingAction';
import { Section, Container, Item, Border, Image1 } from '../../styles/GlobalStyles'

const Upcoming = ({limit}) => {
    useEffect(() => {
        dispatch(fetchUpcomingMovies())
    }, []);
    const dispatch = useDispatch();
    const movies = useSelector(state => state.upcoming)
    const random = Math.floor(Math.random() * parseInt(movies.data.length - limit));

    return (  
        movies.loading ? ( <h1>Loading</h1> ) 
        : movies.error ? ( <h1>{movies.error}</h1> )
        : (
            <Section>
                <Link href='/movies:upcoming'>
                    <h5 className='title'>Upcoming</h5>
                </Link>
                <Container>
                    {movies.data.slice(random, parseInt(random + limit)).map(movie =>
                        <Item key={movie.id}>
                            <Border>
                                <Image1 src={process.env.NEXT_PUBLIC_IMAGE + movie.poster_path} />
                            </Border>
                        </Item>
                    )}
                </Container>
            </Section>
        )
    )
}

export default Upcoming;