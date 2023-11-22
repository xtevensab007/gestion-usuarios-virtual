import { userApi } from "@/api/userApi"
import { Users, Sites, Travel } from "@/interfaces/user.interfaces"


export const changeUserInfo = async (userInfo: Users) => {

   const response = await userApi.post(
           'users',
           userInfo
       )

       return response.data
}

export const registerUser = async (newUser: Users) => {

   const response = await userApi.post(
           'users',
           newUser 
       )

       return response.data
}

export const loadTravelHistory = async () => {

   const response = await userApi.get(
           'get travel history info address here'
       )

       return response.data
}

export const deleteTravel = async (travels: Travel) => {

   const response = await userApi.post(
           'sites',
           travels 
       )

       return response.data
}

export const loadFavSites = async () => {

   const response = await userApi.get(
           'sites/byUser/1'
       )

       return response.data
}

export const updateFavSites = async (sites: Sites) => {

   const response = await userApi.post(
           'sites',
           sites 
       )

       return response.data
}

export const addFavSite = async (sites: Sites) => {

   const response = await userApi.post(
           'sites',
           sites 
       )

       return response.data
}