import axiosInstance from ".";

export const profileFetch = async () => {
    const response = await axiosInstance.get('account/info');
    return response
}