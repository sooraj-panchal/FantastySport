import React, { useState, useEffect } from 'react'
import { ActivityIndicator, FlatList, ScrollView, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { DarkBlueColor, GrayColor, LightGrayColor, PrimaryColor } from '../../../assets/colors'
import Btn from '../../../components/Btn'
import Container from '../../../components/Container'
import Img from '../../../components/Img'
import Label from '../../../components/Label'
import MainContainer from '../../../components/MainContainer'
import TextInputComp from '../../../components/TextInputComp'

const data = [
    {
        id: "1",
        userId: "0",
        message: "hello Sooraj, How Are you what are you doing",
        timeStamp: "08:20 PM"
    },
    {
        id: "2",
        userId: "1",
        message: "hello panchal, what are you doing",
        timeStamp: "08:20 PM"
    },
    {
        id: "3",
        userId: "0",
        message: "what are you doing",
        timeStamp: "08:20 PM"
    },
    {
        id: "4",
        userId: "1",
        message: "how are you",
        timeStamp: "08:20 PM"
    },
    {
        id: "5",
        userId: "0",
        message: "kesa hai?, how are you",
        timeStamp: "08:20 PM"
    },
    {
        id: "1",
        userId: "0",
        message: "hello Sooraj, How Are you what are you doing",
        timeStamp: "08:20 PM"
    },
    {
        id: "2",
        userId: "1",
        message: "hello panchal, what are you doing",
        timeStamp: "08:20 PM"
    },
    {
        id: "3",
        userId: "0",
        message: "what are you doing",
        timeStamp: "08:20 PM"
    },
    {
        id: "4",
        userId: "0",
        message: "how are you",
        timeStamp: "08:20 PM"
    },
    {
        id: "5",
        userId: "0",
        message: "kesa hai?, how are you",
        timeStamp: "08:20 PM"
    },
    {
        id: "5",
        userId: "0",
        message: "kesa hai?, how are you",
        timeStamp: "08:20 PM"
    },
    {
        id: "1",
        userId: "0",
        message: "hello Sooraj, How Are you what are you doing",
        timeStamp: "08:20 PM"
    },
    {
        id: "2",
        userId: "1",
        message: "hello panchal, what are you doing",
        timeStamp: "08:20 PM"
    },
    {
        id: "3",
        userId: "0",
        message: "what are you doing",
        timeStamp: "08:20 PM"
    },
    {
        id: "4",
        userId: "0",
        message: "how are you",
        timeStamp: "08:20 PM"
    },
    {
        id: "5",
        userId: "0",
        message: "kesa hai?, how are you",
        timeStamp: "08:20 PM"
    }
]

export const MessagesList = ({
    message,
    userId,
    timeStamp,
}) => {
    // console.log(userId)
    if (userId == "0") {
        return (
            <Container containerStyle={{
                backgroundColor: "#f3f3f3",
                elevation: 1,
                minHeight: 30,
                maxWidth: "80%",
                justifyContent: "center",
                borderRadius: 5,
                alignSelf: 'flex-start'
            }} mpContainer={{ ml: 10, pl: 10, pr: 10, pt: 5 }}
            >
                <Label
                    labelSize={14}
                    labelStyle={{
                        maxWidth: "90%"
                    }}
                >{message}</Label>
                <Label
                    labelStyle={{
                        textAlign: "right",
                        color: GrayColor
                    }}
                    labelSize={10}
                    mpLabelStyle={{ mr: 10, mt: 2 }}
                >{timeStamp}</Label>
            </Container>
        )
    }
    return (
        <Container containerStyle={{
            backgroundColor: "#f3f3f3",
            elevation: 1,
            minHeight: 30,
            maxWidth: "80%",
            justifyContent: "center",
            borderRadius: 5,
            alignSelf: 'flex-end'
        }} mpContainer={{ mr: 10, pl: 10, pt: 5, pr: 10 }}
        >
            <Label
                labelSize={14}
                labelStyle={{
                    maxWidth: "90%"
                }}
            >{message}</Label>
            <Label
                labelStyle={{
                    textAlign: "right",
                    color: GrayColor
                }}
                labelSize={10}
                mpLabelStyle={{ mr: 10, mt: 2 }}
            >{timeStamp}</Label>
        </Container>
    )
}
const MemoizedSubComponent = React.memo(MessagesList);

function ChatDetailScreen({
    navigation,
    route
}) {
    const [message, setMessage] = useState("")
    const [messageArray, setMessageArray] = useState(data)
    const [NewDataLoading, setNewDataLoading] = useState(false)
    const onSendMessage = () => {
        setMessageArray(arr => [{
            id: '1',
            userId: "1",
            message: message,
            timeStamp: "09:20 PM"
        }, ...arr]);
        setMessage("")
    }

    const MessageContainer = () => {
        return (
            <Container
                containerStyle={{
                    backgroundColor: "#f2f2f2",
                    position: "absolute",
                    width: "100%",
                    bottom: 0,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
                mpContainer={{ ph: 10, pv: 10 }}
            >
                <TextInputComp
                    inputContainerStyle={{
                        backgroundColor: "white",
                        borderRadius: 30,
                        fontSize: 15,
                        // paddingRight: 0,
                        flex: 0.85,
                        height: null,
                        // elevation: 1,
                        borderWidth: 0.8,
                        borderColor: "lightgrey",
                        maxHeight: 300,
                    }}
                    inputStyle={{
                        fontSize: 15,
                        flex: 0.95
                    }}
                    mpInputContainer={{ pl: 10 }}
                    placeholder="Type a Message  |"
                    multiline={true}
                    editable={true}
                    value={message}
                    onChangeText={(value) => setMessage(value)}
                />
                <Container containerStyle={{
                    backgroundColor: DarkBlueColor,
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: 'center',
                    position: "absolute",
                    right: 10,
                    bottom: 40 / 3
                }}
                    width={40}
                    height={40}
                    mpContainer={{ pl: 3 }}
                    onPressCard={onSendMessage}
                >
                    <Ionicons
                        name="md-send"
                        size={20}
                        color="white"
                    />
                </Container>
            </Container>
        )
    }

    const newDataRender = () => {
        setNewDataLoading(true)
        const newData = [
            {
                id: "3",
                userId: "1",
                message: "new Data From Server",
                timeStamp: "08:20 PM"
            },
            {
                id: "3",
                userId: "0",
                message: "would you like, our new Data",
                timeStamp: "08:20 PM"
            },

        ]
        setMessageArray(arr => [...arr, ...newData])
        setTimeout(() => {
            setNewDataLoading(false)
        }, 2000);
    }

    return (
        <MainContainer style={{ backgroundColor: "white" }}>
            <FlatList
                data={messageArray}
                renderItem={({ item, index }) => {
                    return <MemoizedSubComponent
                        message={item.message}
                        userId={item.userId}
                        timeStamp={item.timeStamp}
                    />
                }}
                // refreshing={NewDataLoading}
                // onRefresh={() => { newDataRender() }}
                style={{ flex: 1 }}
                // contentContainerStyle={{ bottom: NewDataLoading ? 300 : 0 }}
                keyExtractor={(_, index) => index.toString()}
                ListHeaderComponent={() => <Container mpContainer={{ mt: 100 }} />}
                ItemSeparatorComponent={() => <Container mpContainer={{ mt: 10 }} />}
                inverted={true}
                ListFooterComponent={() => {
                    return (
                        <View style={{
                            height: 100,
                            justifyContent: "center",
                            alignItems: "center",
                        }} >
                            {NewDataLoading &&
                                <ActivityIndicator
                                    size="large"
                                    color="black"
                                />
                            }
                        </View>
                    )
                }}
                showsVerticalScrollIndicator={false}
                initialNumToRender={5}   // how many item to display first
                onEndReachedThreshold={0.5} // so when you are at 5 pixel from the bottom react run onEndReached function
                onEndReached={() => {
                    newDataRender()
                }}
            />
            {MessageContainer()}
        </MainContainer>
    )
}

export default ChatDetailScreen

// import React, { useState, useEffect } from 'react';

// // import all the components we are going to use
// import {
//     SafeAreaView,
//     View,
//     Text,
//     StyleSheet,
//     FlatList,
//     ActivityIndicator,
// } from 'react-native';

// const App = () => {
//     const [loading, setLoading] = useState(false);
//     const [dataSource, setDataSource] = useState([]);
//     const [offset, setOffset] = useState(1);
//     const [isListEnd, setIsListEnd] = useState(false);

//     useEffect(() => getData(), []);

//     const getData = () => {
//         console.log(offset);
//         if (!loading && !isListEnd) {
//             console.log('getData');
//             setLoading(true);
//             // Service to get the data from the server to render
//             fetch('https://aboutreact.herokuapp.com/getpost.php?offset='
//                 + offset)
//                 // Sending the currect offset with get request
//                 .then((response) => response.json())
//                 .then((responseJson) => {
//                     // Successful response from the API Call
//                     console.log(responseJson);
//                     if (responseJson.results.length > 0) {
//                         setOffset(offset + 1);
//                         // After the response increasing the offset
//                         setDataSource([...dataSource, ...responseJson.results]);
//                         setLoading(false);
//                     } else {
//                         setIsListEnd(true);
//                         setLoading(false);
//                     }
//                 })
//                 .catch((error) => {
//                     console.error(error);
//                 });
//         }
//     };

//     const renderFooter = () => {
//         return (
//             // Footer View with Loader
//             <View style={styles.footer}>
//                 {loading ? (
//                     <ActivityIndicator
//                         color="black"
//                         style={{ margin: 15 }} />
//                 ) : null}
//             </View>
//         );
//     };

//     const ItemView = ({ item }) => {
//         return (
//             // Flat List Item
//             <Text
//                 style={styles.itemStyle}
//                 onPress={() => getItem(item)}>
//                 {item.id}
//                 {'.'}
//                 {item.title.toUpperCase()}
//             </Text>
//         );
//     };

//     const ItemSeparatorView = () => {
//         return (
//             // Flat List Item Separator
//             <View
//                 style={{
//                     height: 0.5,
//                     width: '100%',
//                     backgroundColor: '#C8C8C8',
//                 }}
//             />
//         );
//     };

//     const getItem = (item) => {
//         // Function for click on an item
//         alert('Id : ' + item.id + ' Title : ' + item.title);
//     };

//     return (
//         <SafeAreaView style={{ flex: 1,backgroundColor:"white" }}>
//             <FlatList
//                 data={dataSource}
//                 keyExtractor={(item, index) => index.toString()}
//                 ItemSeparatorComponent={ItemSeparatorView}
//                 renderItem={ItemView}
//                 ListFooterComponent={renderFooter}
//                 onEndReached={getData}
//                 onEndReachedThreshold={0.5}
//             />
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     footer: {
//         padding: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'row',
//     },
// });

// export default App;