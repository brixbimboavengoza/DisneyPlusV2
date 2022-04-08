import { Container, Item, Border, Image1 } from '../styles/GlobalStyles';
import { connect } from 'react-redux'


const Related = props => {
    console.log("props: ", props)
    return (
        <Wrap>
            
        </Wrap>
    )
}

export default connect(mapStateToProps, { fetchMovies })(Related)


const mapStateToProps = state => ({
    movies: state.movies.movies[0]
})