import * as paths from './apiPaths'
const buildFormData = (url, data) => {
    console.log("url=====>", url)
    console.log("data=====>", data)

    return fetch(url, {
        method: 'post',
        headers: {
            "Accept": "application/json",
            "Content-Type": "multipart/form-data"
        },
        body: data
    }).then((res) => res.json())
}

export function registerApi(data) {
    return buildFormData(paths.mainUrl + paths.registerUser, data)
}

export function loginApi(data) {
    return buildFormData(paths.mainUrl + paths.loginUser, data)
}

export function verifyOtpApi(data) {
    return buildFormData(paths.mainUrl + paths.otp_verify, data)
}
export function forgotPasswordApi(data) {
    return buildFormData(paths.mainUrl + paths.forgotPassword, data)
}
export function resetPasswordApi(data) {
    return buildFormData(paths.mainUrl + paths.Resetpassword, data)
}

export function newsApi(data) {
    return buildFormData(paths.mainUrl + paths.news_list, data)
}
