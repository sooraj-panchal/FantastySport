import React from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { bold } from '../../../assets/fonts/fonts';
import Container from '../../../components/Container';
import Label from '../../../components/Label';

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
        mpContainer={{ pv: 10, mh: 20 }}
    >
        <Label
            labelSize={14}
            style={{
                color: "black"
            }}
        >{index}. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur, eveniet distinctio.</Label>
    </Container>
}


const SecondPage: React.FC = ({

}) => {
    // interface renderFacingDataType {
    //     isSelected: boolean;
    //     name: string
    // }
    const renderInstructionListItem: ListRenderItem<{}> = ({ item, index }) => {
        return (
            <InstructionList index={item} />
        )
    }
    return (
        <Container
            containerStyle={{
                flex: 1,
            }} >
            <Label
                labelSize={18}
                style={{
                    color: "black",
                    fontFamily: bold
                }}
                mpLabel={{
                    pl: 20,
                    mt:15
                }}
            >Instructions</Label>
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7]}
                renderItem={renderInstructionListItem}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <Container containerStyle={{ height: 1, backgroundColor: "lightgrey" }} mpContainer={{ mh: 20 }} />}
            />
        </Container>
    )
}
export default SecondPage;