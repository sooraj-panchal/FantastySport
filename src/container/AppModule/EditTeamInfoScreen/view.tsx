import React, { useState, useEffect } from 'react';
import { ListRenderItem, ScrollView, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Container from '../../../components/Container';
import InputBox from '../../../components/InputBox';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { EditTeamNav, navigationProps } from '../../../types/nav';
import { screenWidth } from '../../../types/sizes';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Btn from '../../../components/Btn';
import Img from '../../../components/Img';
import { OrangeColor } from '../../../assets/colors';
import { MyTeamLogoResponse, UserResponse } from '../../../types/responseTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useGetMyTeamLogoQuery } from '../../../features/sportsData';
import { SvgCssUri, SvgUri } from 'react-native-svg';
import ImagePicker from 'react-native-image-crop-picker';
import { useUpdateTeamDetailsMutation } from '../../../features/league';
import { AppStack } from '../../../navigator/navActions';


const EditTeamInfoScreen: React.FC<EditTeamNav> = ({
    navigation, route
}) => {
    const user: UserResponse = useSelector((state: RootState) => state.auth.user)
    const [teamName, setTeamName] = useState(route.params?.team_name || '')
    const { data, isLoading } = useGetMyTeamLogoQuery('')
    const [teamIndex, setTeamIndex] = useState<number>(-1)
    const [teamLogo, setTeamLogo] = useState<string>(route.params?.team_logo || '')
    const [updateTeamDetails, { data: updateTeamData, isLoading: updateTeamDetailLoading }] = useUpdateTeamDetailsMutation<any>()


    const renderItem: ListRenderItem<MyTeamLogoResponse> = ({ item, index }) => {
        let imageType = item.WikipediaLogoUrl?.split('.').pop() == 'svg';
        return <Container
            containerStyle={{
                flexDirection: 'row', alignItems: 'center',
                width: screenWidth * 0.30,
                justifyContent: 'center'
            }}
            mpContainer={{ mt: 10, ml: 10 }}
            onPress={() => {
                setTeamIndex(index)
                setTeamLogo('')
            }}
        >
            <Container containerStyle={{
                borderWidth: 1.5, borderColor: 'black',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center'
            }} height={20} width={20} >
                {
                    index == teamIndex ?
                        <Container
                            containerStyle={{ backgroundColor: 'black', borderRadius: 30 }}
                            width={10} height={10}
                        /> : null
                }
            </Container>
            <Container height={40} width={40} mpContainer={{ mh: 10 }}
            >
                {imageType ?
                    <SvgCssUri
                        width="100%"
                        height="100%"
                        uri={item.WikipediaLogoUrl || ''}
                    />
                    :
                    <Img
                        imgStyle={{}}
                        width={40} height={40}
                        mpImage={{ ml: 15 }}
                        imgSrc={{ uri: item.WikipediaLogoUrl || ' dummy' }} />
                }
            </Container>
        </Container>
    }

    const saveDataHandler = () => {
        let WikipediaLogoUrl = data?.find((item, index) => index == teamIndex)?.WikipediaLogoUrl
        let logo = teamLogo || WikipediaLogoUrl

        console.log('WikipediaLogoUrl', WikipediaLogoUrl)
        let formData = new FormData()
        formData.append('team_name', teamName)
        formData.append('team_id', route.params?.team_id)
        let file_name = logo?.substring(logo?.lastIndexOf('/') + 1);
        let extension = logo?.split('.').pop();
        if (logo) {
            formData.append('team_logo', {
                uri: logo,
                name: file_name,
                type: extension == 'svg' ? 'image/svg' : 'image/jpg'
            });
        } else {
            formData.append('team_logo', '')
        }
        console.log("data", JSON.stringify(formData))
        updateTeamDetails(formData).unwrap().then(() => {
            navigation.dispatch(AppStack)
        })
        // navigation.navigate('EditTeam')
    }

    const selectLogo = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setTeamLogo(image.path)
            setTeamIndex(-1)
        });
    }

    return (
        <MainContainer
            loading={isLoading}
            absoluteModalLoading={updateTeamDetailLoading}
            successMessage={updateTeamData?.message}
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
                {/* <Label
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
                >OR</Label> */}
                <Label
                    mpLabel={{ ml: 15, mt: 20 }}
                    labelSize={18}
                >Upload a team logo</Label>
                <Container
                    containerStyle={{
                        backgroundColor: "lightgrey",
                        borderRadius: 80, justifyContent: 'center', alignItems: 'center',
                        overflow: 'hidden'
                    }}
                    width={90} height={90}
                    mpContainer={{ ml: 15, mt: 20 }}
                    onPress={selectLogo}
                >
                    {
                        teamLogo ?
                            <Img
                                imgSrc={{ uri: teamLogo }}
                                imgStyle={{
                                    width: 90,
                                    height: 90
                                }}
                            />
                            :
                            <Ionicons
                                name="ios-camera"
                                size={50}
                            />
                    }
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