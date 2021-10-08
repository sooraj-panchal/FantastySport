import React, { useEffect, useState } from 'react';
import { ListRenderItem, ScrollView, View } from 'react-native';
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
import { MyTeamLogoResponse, UserResponse } from '../../../types/responseTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useGetMyTeamLogoQuery } from '../../../features/sportsData';
import { SvgUri } from 'react-native-svg';

interface props extends navigationProps {

}

const EditTeamInfoScreen: React.FC<props> = ({
    navigation
}) => {
    const user: UserResponse = useSelector((state: RootState) => state.auth.user)
    const [teamName, setTeamName] = useState(`${user.first_name}'s Team`)
    const { data, isLoading } = useGetMyTeamLogoQuery<any>('')
    const [teamLogo, setTeamLogo] = useState<string | any>(data[0]?.WikipediaLogoUrl)
    
    // useEffect(() => {
    //     if (data?.length) {
    //         setTeamLogo(data[0]?.WikipediaLogoUrl)
    //     }
    // }, [data])

    const renderItem: ListRenderItem<MyTeamLogoResponse> = ({ item, index }) => {
        let imageType = item.WikipediaLogoUrl?.split('.').pop() == 'svg';
        console.log('item.WikipediaLogoUrl', item.WikipediaLogoUrl)
        return <Container
            containerStyle={{
                flexDirection: 'row', alignItems: 'center',
                width: screenWidth * 0.30,
                justifyContent: 'center'
            }}
            mpContainer={{ mt: 10, ml: 10 }}
            onPress={() => {
                setTeamLogo(item.WikipediaLogoUrl)
            }}
        >
            <Container containerStyle={{
                borderWidth: 1.5, borderColor: 'black',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center'
            }} height={20} width={20} >
                {
                    teamLogo == item.WikipediaLogoUrl ?
                        <Container
                            containerStyle={{ backgroundColor: 'black', borderRadius: 30 }}
                            width={10} height={10}
                        /> : null
                }
            </Container>
            <Container height={40} width={40} mpContainer={{ mh: 10 }}

            >
                {imageType ?
                    <SvgUri
                        width={40}
                        height={40}
                        uri={item.WikipediaLogoUrl || ''}
                    />
                    :
                    <Img
                        imgStyle={{}}
                        width={40} height={40}
                        mpImage={{ ml: 15 }}
                        imgSrc={{ uri: item.WikipediaLogoUrl || ' dummy' }}
                    />
                }
            </Container>
        </Container>
    }

    const saveDataHandler = () => {
        navigation.navigate('EditTeam')
    }

    return (
        <MainContainer
            loading={isLoading}
        >
            <ScrollView
                contentContainerStyle={{ paddingBottom: 40 }}
            >
                <Label
                    mpLabel={{ ml: 15, mt: 20 }}
                    labelSize={20}
                >Team name</Label>
                <InputBox
                    placeholder="Type here.."
                    mpContainer={{ mh: 20, mt: 10, pl: 10 }}
                    textSize={14}
                    containerStyle={{ backgroundColor: "white", borderColor: 'lightgrey' }}
                    value={teamName}
                    onChangeText={(v) => setTeamName(v)}
                />
                <Label
                    mpLabel={{ ml: 15, mt: 10 }}
                    labelSize={20}
                >Select team logo</Label>
                <View>
                    <FlatList
                        data={data}
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
                        width: "90%",
                        alignSelf: 'center'
                    }}
                    labelSize={18}
                    labelStyle={{ color: "white" }}
                    onPress={saveDataHandler}
                    btnHeight={45}
                    mpBtn={{ mt: 20 }}
                    radius={5}
                />
            </ScrollView>
        </MainContainer>
    )
}
export default EditTeamInfoScreen