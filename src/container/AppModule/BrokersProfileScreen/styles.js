import { StyleSheet } from "react-native";
import { DarkBlueColor, OrangeColor } from "../../../assets/colors";
import { medium, semiBold } from "../../../assets/fonts/fonts";

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: DarkBlueColor
    },
    headerTopContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerLeftContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    headerRightContainer:{
        borderRadius:4,
        backgroundColor:'#0b4b6b',
    },
    headerRightlabelStyle:{
        color:"white"
    },
    headerLabel: {
        color: "white",
        fontFamily:semiBold
    },
    searchContainer: {
        backgroundColor: DarkBlueColor,
        justifyContent: "center",
    },
    searchBtn: {
        backgroundColor: "white",
        alignItems:"center",
        borderRadius: 4,
        borderWidth: 0
    },
    searchBtnLabel: {
        color: "black",
        opacity:0.3,
        paddingLeft: 10,
        // paddingTop: 3,
        letterSpacing:0.2,
        
    },
    propertyTypeLabelContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        paddingTop: 15,
        paddingHorizontal: 15
    },
    propertyTypeContainer: {
        backgroundColor: "#f9f9f9",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#e3e3e3",
        elevation: 0,
        overflow: "hidden"
    },
    propertyTypeImage: {

    },
    propertyNameContainer: {
        height: 40,
        justifyContent: "center"
    },
    propertyTypeListContainer: {
        paddingLeft: 15,
        marginTop: 10
    },
    propertyForYouButton: {
        // width: 100,
        backgroundColor:DarkBlueColor,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:20,
        borderWidth:0
    }
})
export default styles