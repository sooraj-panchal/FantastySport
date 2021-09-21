import { StyleSheet } from "react-native";
import { DarkBlueColor, OrangeColor } from "../../../assets/colors";
import { medium, semiBold } from "../../../assets/fonts/fonts";
import { screenWidth } from "../../../types/sizes";

const styles = StyleSheet.create({
    container:{
        width: screenWidth * 0.85,
        height: 170,
        marginBottom: 5,
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 2,
        overflow: "hidden"
    },
    leagueText:{
        fontWeight: "bold"
    },
    btnContainer:{
        position: "absolute",
        bottom: 20,
        left: 15,
        flexDirection:'row',
        alignItems:'center'
    },
    playBtn:{
        backgroundColor: OrangeColor,
        width: screenWidth * 0.20,
    },
    playBtnText:{ color: "white" },
    middleView:{
        position: "absolute",
        right: 30,
        top: -20,
        flexDirection: 'row',
        alignItems: 'center',
        transform: [{
            rotate: '15deg'
        }]
    },
    separater:{
        backgroundColor: "#f2d5d7",
        width: 10,
        height: 220
    },
    separater1:{
        backgroundColor: "#f2d5d7",
        width: 45,
        height: 220
    },
    leagueBGContainer:{
        position: 'absolute',
        right: -60,
        bottom: -20,
    },
    leagueBGImage:{
        height: 170,
        width: 170,
        resizeMode: 'contain'
    }
})
export default styles