import Images from '../src/local/images';
import { Container, Item, Border, Image1, Image2 } from '../styles/GlobalStyles';

export default function Category() {
    return (
        <Container>
            {Images.map(i =>
                <Item key={i.title}>
                    <Border>
                        <Image1 src={i.image1} alt={i.title}/>
                        <Image2 src={i.image2} alt={i.title}/>
                    </Border>
                </Item>
            )}
        </Container>
    )
}

