import React, { useState } from "react";
import Btn from "../../../components/Btn";
import Container from "../../../components/Container";
import MainContainer from "../../../components/MainContainer";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Switch, View } from "react-native";
import { LightGrayColor, PrimaryColor } from "../../../assets/colors";
import { navigationProps } from "../../../types/nav";
const ListContainer = ({
    name,
    onPress
}: { name: string, onPress: () => void }) => {
    return (
        <Btn
            btnStyle={{
                backgroundColor: "white",
                justifyContent: "flex-start"
            }}
            btnHeight={45}
            title={name}
            labelSize={14}
            labelStyle={{
                color: "black"
            }}
            mpBtn={{ mh: 5, pl: 20 }}
            rightIcon={() => {
                return <Ionicons
                    name="chevron-forward"
                    size={30}
                    color="grey"
                    style={{ position: "absolute", right: 10 }}
                />
            }}
            onPress={onPress}
        />
    )

}

interface props extends navigationProps {

}

const SettingScreen: React.FC<props> = ({
    navigation,
    route
}) => {
    const [Notification, setNotification] = useState(false)

    return (
        <MainContainer style={{ backgroundColor: '#f2f2f2' }} >
            <Btn
                btnStyle={{
                    backgroundColor: "white",
                    borderRadius: 0,
                    elevation: 1,
                    justifyContent: "flex-start"
                }}
                title="Email Notification"
                labelSize={14}
                labelStyle={{
                    color: "black"
                }}
                mpBtn={{ mt: 5, pl: 20 }}
                rightIcon={() => {
                    return <View style={{
                        position: "absolute", right: 10
                    }} >
                        <Switch
                            value={Notification}
                            onValueChange={(val) => {
                                setNotification(val)
                            }}
                            trackColor={{
                                false: LightGrayColor,
                                true: PrimaryColor
                            }}
                        // ios_backgroundColor={PrimaryColor}
                        />
                    </View>
                }}
                onPress={() => {
                    // navigation.navigate("SavedStack")
                    // navigation.navigate('SettingStack', { screen });
                    navigation.navigate('SettingStack', {
                        screen: "Notification",
                        params: {
                            title: "Notification",
                        },
                    });
                }}
            />
            <Btn
                btnStyle={{
                    backgroundColor: "white",
                    elevation: 1,
                    borderRadius: 0,
                    justifyContent: "flex-start"
                }}
                title="Push Notification"
                labelSize={14}
                labelStyle={{
                    color: "black"
                }}
                mpBtn={{ mt: 5, pl: 20 }}
                rightIcon={() => {
                    return <View style={{
                        position: "absolute", right: 10
                    }} >
                        <Switch
                            value={Notification}
                            onValueChange={(val) => {
                                setNotification(val)
                            }}
                            trackColor={{
                                false: LightGrayColor,
                                true: PrimaryColor
                            }}
                        // ios_backgroundColor={PrimaryColor}
                        />
                    </View>
                }}
                onPress={() => {
                    // navigation.navigate("SavedStack")
                    // navigation.navigate('SettingStack', { screen });
                    navigation.navigate('SettingStack', {
                        screen: "Notification",
                        params: {
                            title: "Notification",
                        },
                    });
                }}
            />
            <Container containerStyle={{
                backgroundColor: "white",
                elevation: 1,
            }}
                mpContainer={{ mt: 10 }}
            >
                <ListContainer
                    name="Change Password"
                    onPress={() => {
                        navigation.navigate('SettingStack', {
                            screen: "ChangePassword",
                            params: {
                                title: "Change Password",
                            },
                        });
                    }}
                />
                <ListContainer
                    name="Terms & Conditions"
                    onPress={() => {
                        navigation.navigate('SettingStack', {
                            screen: "TermsAndCondition",
                            params: {
                                title: "Terms & Conditions",
                            },
                        });
                    }}
                />
                <ListContainer
                    name="Privacy Policy"
                    onPress={() => {
                        navigation.navigate('SettingStack', {
                            screen: "TermsAndCondition",
                            params: {
                                title: "Privacy Policy",
                            },
                        });
                    }}
                />
                <ListContainer
                    name="About us"
                    onPress={() => {
                        navigation.navigate('SettingStack', {
                            screen: "TermsAndCondition",
                            params: {
                                title: "About us",
                            },
                        });
                    }}
                />
                <ListContainer
                    name="Contact us"
                    onPress={() => {
                        navigation.navigate('SettingStack', {
                            screen: "TermsAndCondition",
                            params: {
                                title: "Contact us",
                            },
                        });
                    }}
                />
            </Container>
            <Container containerStyle={{
                backgroundColor: "white",
                elevation: 1,
            }}
                mpContainer={{ mt: 10 }}
            >
                <ListContainer
                    name="Rate us"
                    onPress={() => {
                        navigation.navigate("SettingStack", {
                            screen: "Feedback",
                            params: {
                                title: "Rate us"
                            }
                        })
                    }}
                />
                <ListContainer
                    name="Share"
                    onPress={() => {
                        navigation.navigate("SettingStack", {
                            screen: "Feedback",
                            params: {
                                title: "Share"
                            }
                        })
                    }}
                />
                <ListContainer
                    name="Feedback"
                    onPress={() => {
                        navigation.navigate("SettingStack", {
                            screen: "Feedback",
                            params: {
                                title: "Feedback"
                            }
                        })
                    }}
                />
            </Container>
        </MainContainer>
    )
}

export default SettingScreen