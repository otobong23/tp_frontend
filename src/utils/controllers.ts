import api from '@/utils/axios';
import Cookies from 'js-cookie';
import { ActivityProps } from '@/components/Activity';
import { showToast } from './alert';


export interface getUserResponse {
  success: boolean,
  user: {
    firstName: string,
    lastName: string,
    email: string,
    wallet: {
      balance: number,
      assetValue: number,
      watchList: string[]
    },
    createdAt: string,
    updatedAt: string
  }
}

export const getUser: () => Promise<getUserResponse | null> = async () => {
  let response: getUserResponse | Error | null = null
  const authorization = Cookies.get('Authorization')
  await api({
    url: '/user/getUser',
    method: 'GET',
    headers: {
      authorization
    }
  }).then(res => {
    response = res.data;
  }).catch(err => {
    showToast('error', err.response.data.message)
    response = err
  })
  return response
}


export const getTransactions: () => Promise<ActivityProps[] | null> = async () => {
  let response: ActivityProps[] | null = null
  const authorization = Cookies.get('Authorization')
  await api({
    url: '/user/getTransactions',
    method: 'GET',
    headers: {
      authorization
    }
  }).then(res => {
    response = res.data;
  }).catch(err => {
    showToast('error', err.response.data.message)
    response = err
  })
  return response
}


export const ethListen = async () => {
  let response = null
  const authorization = Cookies.get('Authorization')
  await api({
    url: '/user/ethListen',
    method: 'POST',
    headers: {
      authorization
    }
  }).then(res => {
    response = res.data;
  }).catch(err => {
    showToast('error', err.response.data.message)
    response = err
  })
  return response
}
export const btcListen = async () => {
  let response = null
  const authorization = Cookies.get('Authorization')
  await api({
    url: '/user/btcListen',
    method: 'POST',
    headers: {
      authorization
    }
  }).then(res => {
    response = res.data;
  }).catch(err => {
    showToast('error', err.response.data.message)
    response = err
  })
  return response
}
export const usdtListen = async () => {
  let response = null
  const authorization = Cookies.get('Authorization')
  await api({
    url: '/user/usdtListen',
    method: 'POST',
    headers: {
      authorization
    }
  }).then(res => {
    response = res.data;
  }).catch(err => {
    showToast('error', err.response.data.message)
    response = err
  })
  return response
}

