import Slides from '../components/Slider';
import Category from '../components/Category';
import styled from 'styled-components';
import Popular from '../components/movieList/Popular';
import Upcoming from '../components/movieList/Upcoming';

export default function Home() {
  return (
    <HomeContainer>
      <Slides/>
      <Category/>
      <Popular limit={5}/>
      <Upcoming limit={5}/>
    </HomeContainer>
  )
}

const HomeContainer = styled.main`
    position: relative;
    overflow: hidden;
    display: block;
    top: 90px;
    padding: 0 calc(3.5vw + 5px);
`;
