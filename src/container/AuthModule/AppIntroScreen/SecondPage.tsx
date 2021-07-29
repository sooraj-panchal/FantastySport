import React from 'react';
import { View } from 'react-native';
import Container from '../../../components/Container';
import Label from '../../../components/Label';

interface InstructionListProps {
    index:number
}

const InstructionList: React.FC<InstructionListProps> = ({
index
}) => {
    return <Container
        containerStyle={{
            justifyContent: "center",
            borderBottomWidth: 1,
            borderBottomColor: "lightgrey"
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

const SecondPage: React.FC = ({

}) => {
    return (
        <Container
            containerStyle={{
                flex: 1,
            }} >
            <Label
                labelSize={16}
                style={{
                    color: "black",
                    fontWeight: "900"
                }}
                mpLabel={{
                    mt: 40,
                    pl: 20
                }}
            >Instructions</Label>
            <InstructionList index={1}/>
            <InstructionList index={2}/>
            <InstructionList index={3}/>
            <InstructionList index={4}/>
            <InstructionList index={5}/>
            <InstructionList index={6}/>
            <InstructionList index={7}/>
            <InstructionList index={8}/>
            <InstructionList index={9}/>
        </Container>
    )
}
export default SecondPage;