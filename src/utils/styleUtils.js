import { Dimensions } from "react-native";

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
// alert(screenHeight*(60/screenHeight))
export const vs = size => screenHeight * (size / screenHeight)
export const hs = size => screenWidth * (size / screenWidth)


export const mpStyle = (marginPadding) =>
// let { mt, ml, mb, mr, m, pt, pl, pb, pr, p, pv, mv, ph, mh } = marginPadding
({
    marginTop: marginPadding?.mt ? vs(marginPadding?.mt) : null,
    marginHorizontal: marginPadding?.mh ? vs(marginPadding?.mh) : null,
    marginLeft: marginPadding?.ml ? hs(marginPadding?.ml) : null,
    marginBottom: marginPadding?.mb ? vs(marginPadding?.mb) : null,
    marginRight: marginPadding?.mr ? hs(marginPadding?.mr) : null,
    margin: marginPadding?.m ? hs(marginPadding?.m) : null,
    paddingTop: marginPadding?.pt ? vs(marginPadding?.pt) : null,
    paddingLeft: marginPadding?.pl ? hs(marginPadding?.pl) : null,
    paddingBottom: marginPadding?.pb ? vs(marginPadding?.pb) : null,
    paddingRight: marginPadding?.pr ? hs(marginPadding?.pr) : null,
    padding: marginPadding?.p ? hs(marginPadding?.p) : null,
    paddingVertical: marginPadding?.pv ? vs(marginPadding?.pv) : null,
    marginVertical: marginPadding?.mv ? vs(marginPadding?.mv) : null,
    paddingHorizontal: marginPadding?.ph ? vs(marginPadding?.ph) : null,
})
