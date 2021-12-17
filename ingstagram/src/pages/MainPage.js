import Profile from '../components/main/Profile';
import Image from '../components/main/Image'
import Text from '../components/main/Text';

function Main() {
    return (
        <div className="main-wrap">
            <ul>
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