import fetch from 'cross-fetch'
import { checkStatus } from 'utils/responseHandler'
import { BACKEND_URL } from 'common/constants'

const constant = {
  URL: BACKEND_URL
}

let headers = {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
}
//add new kosu
const proxyurl = "https://cors-anywhere.herokuapp.com/";
// Make an api call

export default async (
  url: string,
  method: string = 'GET',
  authorization: boolean
) => {
  if (authorization) 
    headers.auth_token = localStorage.getItem('token')
  return fetch(`${proxyurl}${constant.URL}${url}`, {
    method,
    headers: headers
  })
    .then(checkStatus)
    .catch(error => {
      throw error
    })
}
