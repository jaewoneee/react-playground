import Profile from '../components/item/Profile';
import Image from '../components/item/Image'
import Text from '../components/item/Text';

function Main() {
    return (
        <div className="main-wrap">
            <ul>
                <Item></Item>
                <Item></Item>
                <Item></Item>
            </ul>
        </div>
    )
}

// component
function Item() {
    return (
        <li>
            <Profile></Profile>
            <Image></Image>
            <Text></Text>
        </li>
    )
}
export default Main;