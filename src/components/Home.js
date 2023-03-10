import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react'
import BottomSheet from '@gorhom/bottom-sheet';

export async function Api(method, path, productId, body,) {
    const response = await fetch(`${path}${productId}`)
        .then(res => res.json())
        .then(json => { return json })
    return response

}

import { View, Text, FlatList, Image, StyleSheet, Button } from 'react-native'

const styles = StyleSheet.create({
    text: {
        color: 'black',
        marginVertical: 3
    },
    cartBox: {
        width: 180,
        marginHorizontal: 8,
        padding: 10,
        display: 'flex',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    cart_footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        // padding: 10,
        marginVertical: 10
    },
    cart_image: {
        width: '100%',
        height: 100,
        borderRadius: 5,
    },
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
})
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
            <View style={styles.cartBox}>
                <Image source={{ uri: item.thumbnail }} style={styles.cart_image} />

                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text}>{item.brand}</Text>
                <Text numberOfLines={2} style={styles.text}>{item.description}</Text>
                <View style={styles.cart_footer}>
                    <Text style={styles.text}>{`Rs.${item.price}`}</Text>
                    <Text style={styles.text}>{item.rating}</Text>
                </View>
                <Button title='Share Now'></Button>
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
            numColumns={2}
        />

    )
}

export default Home







const BottomSheetComp = () => {
    // ref
    const bottomSheetRef = useRef < BottomSheet > (null);

    // variables
    const snapPoints = useMemo(() => ['25%', '50%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    // renders
    return (
        <View style={styles.container}>
            <BottomSheet
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <View style={styles.contentContainer}>
                    <Text>Awesome 🎉</Text>
                </View>
            </BottomSheet>
        </View>
    );
};



export { BottomSheetComp };