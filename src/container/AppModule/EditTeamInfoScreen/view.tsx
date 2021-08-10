// import React from 'react';
// import { ListRenderItem, View } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
// import Container from '../../../components/Container';
// import InputBox from '../../../components/InputBox';
// import Label from '../../../components/Label';
// import MainContainer from '../../../components/MainContainer';
// import { navigationProps } from '../../../types/nav';
// import { screenWidth } from '../../../types/sizes';
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import Btn from '../../../components/Btn';

// interface props extends navigationProps {

// }

// const EditTeamScreen: React.FC<props> = ({

// }) => {

//     const renderItem: ListRenderItem<{}> = ({ item, index }) => {
//         return <Container
//             containerStyle={{
//                 flexDirection: 'row', alignItems: 'center',
//                 width: screenWidth * 0.21,
//                 justifyContent: 'center'
//             }}
//             mpContainer={{ mt: 10, ml: 10 }}
//         >
//             <Container containerStyle={{
//                 borderWidth: 1.5, borderColor: 'black',
//                 borderRadius: 30,
//                 justifyContent: 'center',
//                 alignItems: 'center'
//             }} height={20} width={20} >
//                 <Container
//                     containerStyle={{ backgroundColor: 'black', borderRadius: 30 }}
//                     width={10} height={10}
//                 />
//             </Container>
//             <Container
//                 containerStyle={{ backgroundColor: 'green', borderRadius: 30 }}
//                 width={30} height={30}
//                 mpContainer={{ ml: 10 }}
//             />
//         </Container>
//     }

//     return (
//         <MainContainer>
//             <Label
//                 mpLabel={{ ml: 15, mt: 20 }}
//                 labelSize={20}
//             >Team name</Label>
//             <InputBox
//                 placeholder="Type here.."
//                 mpContainer={{ mh: 20, mt: 10, pl: 10 }}
//                 textSize={14}
//                 containerStyle={{ backgroundColor: "white", borderColor: 'lightgrey' }}
//             />
//             <Label
//                 mpLabel={{ ml: 15, mt: 40 }}
//                 labelSize={20}
//             >Select team logo</Label>
//             <View>
//                 <FlatList
//                     data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
//                     renderItem={renderItem}
//                     keyExtractor={(item, index) => `TeamNameList ${index.toString()}`}
//                     numColumns={4}
//                 />
//             </View>
//             <Label
//                 mpLabel={{ ml: 15, mt: 20 }}
//                 labelSize={20}
//             >OR</Label>
//             <Label
//                 mpLabel={{ ml: 15, mt: 20 }}
//                 labelSize={18}
//             >Upload a team logo</Label>
//             <Container
//                 containerStyle={{ backgroundColor: "lightgrey", borderRadius: 80, justifyContent: 'center', alignItems: 'center' }}
//                 width={90} height={90}
//                 mpContainer={{ ml: 15, mt: 20 }}
//             >
//                 <Ionicons
//                     name="ios-camera"
//                     size={50}
//                 />
//             </Container>
//             <Btn
//                 title="SAVE"
//                 btnStyle={{
//                     backgroundColor: 'red',
//                     position:"absolute",
//                     bottom:10,
//                     width:"90%",
//                     alignSelf:'center'
//                 }}
//                 labelSize={18}
//                 labelStyle={{ color: "white" }}
//                 onPress={() => { }}
//                 btnHeight={45}
//                 mpBtn={{ mt: 20 }}
//                 radius={5}
//             />
//         </MainContainer>
//     )
// }
// export default EditTeamScreen


import React from 'react';
import { ListRenderItem, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Container from '../../../components/Container';
import InputBox from '../../../components/InputBox';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import { screenWidth } from '../../../types/sizes';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Btn from '../../../components/Btn';
import Img from '../../../components/Img';
import { AppImages } from '../../../assets/images/map';
import { OrangeColor } from '../../../assets/colors';

interface props extends navigationProps {

}

const EditTeamInfoScreen: React.FC<props> = ({
navigation
}) => {

    const renderItem: ListRenderItem<{}> = ({ item, index }) => {
        return <Container
            containerStyle={{
                flexDirection: 'row', alignItems: 'center',
                width: screenWidth * 0.21,
                justifyContent: 'center'
            }}
            mpContainer={{ mt: 10, ml: 10 }}
        >
            <Container containerStyle={{
                borderWidth: 1.5, borderColor: 'black',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center'
            }} height={20} width={20} >
                <Container
                    containerStyle={{ backgroundColor: 'black', borderRadius: 30 }}
                    width={10} height={10}
                />
            </Container>
            <Img
                imgStyle={{ }}
                width={26} height={30}
                mpImage={{ ml: 15 }}
                imgSrc={AppImages.green_logo}
            />
        </Container>
    }

    return (
        <MainContainer>
            <Label
                mpLabel={{ ml: 15, mt: 20 }}
                labelSize={20}
            >Team name</Label>
            <InputBox
                placeholder="Type here.."
                mpContainer={{ mh: 20, mt: 10, pl: 10 }}
                textSize={14}
                containerStyle={{ backgroundColor: "white", borderColor: 'lightgrey' }}
            />
            <Label
                mpLabel={{ ml: 15, mt: 40 }}
                labelSize={20}
            >Select team logo</Label>
            <View>
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => `TeamNameList ${index.toString()}`}
                    numColumns={4}
                />
            </View>
            <Label
                mpLabel={{ ml: 15, mt: 20 }}
                labelSize={20}
            >OR</Label>
            <Label
                mpLabel={{ ml: 15, mt: 20 }}
                labelSize={18}
            >Upload a team logo</Label>
            <Container
                containerStyle={{ backgroundColor: "lightgrey", borderRadius: 80, justifyContent: 'center', alignItems: 'center' }}
                width={90} height={90}
                mpContainer={{ ml: 15, mt: 20 }}
            >
                <Ionicons
                    name="ios-camera"
                    size={50}
                />
            </Container>
            <Btn
                title="SAVE"
                btnStyle={{
                    backgroundColor: OrangeColor,
                    position:"absolute",
                    bottom:10,
                    width:"90%",
                    alignSelf:'center'
                }}
                labelSize={18}
                labelStyle={{ color: "white" }}
                onPress={() => {
                    navigation.navigate('EditTeam')
                 }}
                btnHeight={45}
                mpBtn={{ mt: 20 }}
                radius={5}
            />
        </MainContainer>
    )
}
export default EditTeamInfoScreen