import React, { useEffect, useState } from 'react'
export async function Api(method, path, productId, body,) {
    const response = await fetch(`${path}${productId}`)
        .then(res => res.json())
        .then(json => { return json })
    return response

}

import { View, Text, FlatList } from 'react-native'
function Home() {
    const [data, setData] = useState([])
    useEffect(() => {

        Api('GET', 'https://dummyjson.com/products/', '').then((res) => {
            setData(res.products)
        })
    }, [])
    // console.log('hello', data)
    const renderitem = ({ item }) => {
        console.log(item)
        return (
            <View>
                <Text>hello</Text>
            </View>
        )
    }
    return (
        // <View>
        //     <Text>Home</Text>
        // </View>
        <FlatList
            data={data}
            renderItem={(item) => renderitem(item)}
            keyExtractor={(item, index) => index}
        />

    )
}

export default Home