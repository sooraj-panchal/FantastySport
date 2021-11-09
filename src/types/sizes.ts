import { Dimensions,PixelRatio } from 'react-native';

const { fontScale, width, height } = Dimensions.get("window");

export const screenWidth = width
export const screenHeight = height

export function normalize(size: number) {
    return size / PixelRatio.roundToNearestPixel(fontScale)
}

export const vs = (size: number) => height * (size / height)
export const hs = (size: number) => width * (size / width)

export interface mpStyle {
    mt?: number,
    mb?: number,
    ml?: number
    mr?: number,
    mh?: number,
    mv?: number,
    m?: number,
    pt?: number,
    pb?: number,
    pl?: number,
    pr?: number,
    pv?: number,
    ph?: number,
    p?: number
}

export const mpStyle = (mpStyle: mpStyle) => {
    const { m, mt, mb, ml, mr, mh, mv, p, pt, pb, pl, pr, ph, pv } = mpStyle
    return ({
        marginTop: mt,
        marginHorizontal: mh,
        marginLeft: ml,
        marginBottom: mb,
        marginRight: mr,
        margin: m,
        paddingTop: pt,
        paddingLeft: pl,
        paddingBottom: pb,
        paddingRight: pr,
        padding: p,
        paddingVertical: pv,
        marginVertical: mv,
        paddingHorizontal: ph,
    })
}

