import React, { useEffect, useRef, useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import Container from '../../../components/Container';
import InputBox from '../../../components/InputBox';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { CreateTeamNav } from '../../../types/nav';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Btn from '../../../components/Btn';
import Img from '../../../components/Img';
import { OrangeColor } from '../../../assets/colors';
import { useGetTeamDetailsQuery, useUpdateTeamDetailsMutation } from '../../../features/league';
import { AppStack } from '../../../navigator/navActions';
import ImagePickerModal from '../../../components/Modals/ImagePickerModal';
import { Modalize } from 'react-native-modalize';
import ImagePicker from 'react-native-image-crop-picker';
import { imageBaseUrl } from '../../../utils/globals';


const EditTeamInfoScreen: React.FC<CreateTeamNav> = ({
    navigation, route
}) => {
    const modalizeRef = useRef<Modalize>(null)
    const { data: getTeamDetails, isLoading: teamDetailLoading } = useGetTeamDetailsQuery(null)

    const [teamName, setTeamName] = useState<string>('')
    // const { data, isLoading } = useGetMyTeamLogoQuery('')
    // const [teamIndex, setTeamIndex] = useState<number>(-1)
    const [teamLogo, setTeamLogo] = useState<string>('')

    const [updateTeamDetails, { data: updateTeamData, isLoading: updateTeamDetailLoading, error }] = useUpdateTeamDetailsMutation<any>()

    console.log('getTeamDetails=>', getTeamDetails)

    useEffect(() => {
        if (getTeamDetails != undefined)
            setTeamName(getTeamDetails?.team_name || '')
        setTeamLogo(getTeamDetails?.team_logo ? `${imageBaseUrl}/${getTeamDetails?.team_logo}` : '')

    }, [getTeamDetails])

    const saveDataHandler = () => {
        if (teamName.length) {
            let formData = new FormData()
            formData.append('team_name', teamName)
            // formData.append('team_id', route.params?.team_id)
            let file_name = teamLogo?.substring(teamLogo?.lastIndexOf('/') + 1);
            let extension = teamLogo?.split('.').pop();
            if (teamLogo) {
                formData.append('team_logo', {
                    uri: teamLogo,
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
        } else {
            Alert.alert('Fantasy Sniper', 'Team name is required field.')
        }
    }

    const PickFromGallery = () => {
        ImagePicker.openPicker({
            cropping: true,
            mediaType: "photo",
            freeStyleCropEnabled: true
        }).then(image => {
            console.log(image);
            setTeamLogo(image.path)
            // setTeamIndex(-1)
        }).catch((err) => {
            console.log(err);
        });
    };

    const PickFromCamera = () => {
        ImagePicker.openCamera({
            cropping: true,
            mediaType: "photo",
            freeStyleCropEnabled: true
        }).then(image => {
            console.log(image);
            setTeamLogo(image.path)
            // setTeamIndex(-1)
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <MainContainer
            loading={teamDetailLoading}
            absoluteModalLoading={updateTeamDetailLoading}
            successMessage={updateTeamData?.message}
            errorMessage={error}
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
                    onPress={() => {
                        modalizeRef.current?.open();
                    }}
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
                    title="Save And Update"
                    btnStyle={{
                        backgroundColor: OrangeColor,
                        width: "90%",
                        alignSelf: 'center'
                    }}
                    labelSize={16}
                    labelStyle={{ color: "white" }}
                    onPress={saveDataHandler}
                    btnHeight={45}
                    mpBtn={{ mt: 20 }}
                    radius={5}
                />
            </ScrollView>
            <ImagePickerModal
                onDone={(isFrom) => {
                    modalizeRef.current?.close();
                    if (isFrom == "camera") {
                        PickFromCamera();
                    } else {
                        PickFromGallery();
                    }
                }}
                closeModal={() => {
                    modalizeRef.current?.close();
                }}
                modalizeRef={modalizeRef}
            />
        </MainContainer>
    )
}
export default EditTeamInfoScreen;

// function setTeamIndex(index: number) {
//     throw new Error('Function not implemented.');
// }
