import React from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import { screenHeight } from '../../../types/sizes';

interface InstructionListProps {
    index: number | {}
}

const InstructionList: React.FC<InstructionListProps> = ({
    index
}) => {
    return <Container
        containerStyle={{
            justifyContent: "center"
        }}
        mpContainer={{ pv: 15, mh: 20 }}
    >
        <Label
            labelSize={14}
            style={{
                color: "black"
            }}
        >{index}. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur, eveniet distinctio.</Label>
    </Container>
}


const ThirdPage: React.FC = () => {
    return (
        <Container
            containerStyle={{
                flex: 1,
            }} >
            <Container
                containerStyle={{
                    // alignItems:"center",
                    flex: 1
                }}
                mpContainer={{ mt: 20 }}
            >
                <Container containerStyle={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    // width:"100%"
                }}
                >
                    <Container
                        containerStyle={{
                            backgroundColor: "lightgrey",
                            width: "35%",
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10
                        }}
                        height={240}
                    />
                    <Container
                        containerStyle={{
                            backgroundColor: "lightgrey",
                            width: "35%",
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10
                        }}
                        height={240}
                    />
                </Container>
                <Container
                    containerStyle={{
                        backgroundColor: "white",
                        elevation: 1,
                        width: "70%",
                        height: screenHeight * 0.48,
                        position: "absolute",
                        alignSelf: "center",
                        top: 60,
                        borderRadius: 10
                    }}
                />
            </Container>
            <Container>
                <Label labelSize={20} style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "black"
                }}
                >Live match</Label>
                <Label labelSize={14} style={{
                    textAlign: "center",
                    color: "black"
                }}
                    mpLabel={{ mh: 10, mt: 15 }}
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, soluta! Blanditiis impedit beatae tenetur et reprehenderit dolorem suscipit commodi, ea amet, soluta ullam officia consectetur exercitationem.</Label>
            </Container>
        </Container>
    )
}
export default ThirdPage;