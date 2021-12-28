import Profile from '../components/item/Profile';
import Image from '../components/item/Image'
import Text from '../components/item/Text';
import React, { useEffect, useState } from 'react';
import { fetchItems } from '../api/index';


function Main() {

    let [items, setItems] = useState([]);

    useEffect(() => {
        const makeFeed = async () => {
            const feedItem = await fetchItems();
            setItems(feedItem.data);
        }
        makeFeed();
    },[]);

    return (
        <div className="main-wrap">
                <ul>
                    {
                        items.map((value, i) => {
                            return (
                                <li>
                                    <Profile propsdata={items[i]}></Profile>
                                    <Image propsdata={items[i]}></Image>
                                    <Text propsdata={items[i]}></Text>
                                </li>
                            )
                        })
                    } 
                </ul>
        </div>
    )
}



export default Main;