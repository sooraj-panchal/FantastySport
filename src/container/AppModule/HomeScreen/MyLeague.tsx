import React from 'react';
import { View } from 'react-native-animatable';
import PagerView from 'react-native-pager-view';
import { DarkBlueColor } from '../../../assets/colors';
import { medium } from '../../../assets/fonts/fonts';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import MyLeagueItem from '../../../components/MyLeagueItem';
import { useLeagueListQuery } from '../../../features/league';

const MyLeague: React.FC<any> = ({
    // leagueList,
    // loading
}) => {

    const [page, setPage] = React.useState<Number>(0)
    const { data, isLoading } = useLeagueListQuery(null)

    return (
        <MainContainer loading={isLoading}  >
            {
                data?.length ?
                    <>
                        <Container containerStyle={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                            mpContainer={{ pt: 20, ph: 20 }}
                        >
                            <Label
                                labelSize={16}
                                style={{
                                    fontFamily: medium
                                }}
                            >My Top Leagues</Label>
                        </Container>
                        <PagerView
                            initialPage={0}
                            style={{
                                height: 140,
                                marginTop: 10,
                            }}
                            onPageSelected={(event) => {
                                console.log(event.nativeEvent.position)
                                setPage(event.nativeEvent.position)
                            }}
                            key={'PagerView'}
                        >
                            {
                                data?.map((item, index) => {
                                    return <View key={index}>
                                        <MyLeagueItem
                                            {...item}
                                            createMatchHandler={() => {
                                            }}
                                        />
                                    </View>
                                })
                            }
                        </PagerView>
                        <Container
                            containerStyle={{
                                flexDirection: "row",
                                alignSelf: "center"
                            }}
                        // mpContainer={{ mt: 5 }}
                        >
                            {data?.map((item, index) => {
                                return (
                                    <Container key={`paginDot ${index}`}
                                        containerStyle={{
                                            backgroundColor: index == page ? DarkBlueColor : "#f2f2f2",
                                            borderRadius: 40,
                                            elevation: 0.5,
                                            borderWidth: index == page ? 0 : 1,
                                            borderColor: "grey"
                                        }}
                                        mpContainer={{ mh: 2 }}
                                        width={8} height={8}
                                    >
                                    </Container>
                                )
                            })}
                        </Container>
                    </>
                    : null
            }
        </MainContainer>
    )
}
export default MyLeague;
