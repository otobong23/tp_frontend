import api from '@/utils/axios';
import { showToast } from '@/utils/alert';
import Cookies from 'js-cookie';

interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignupResponse {
  token?: string;
  message: string;
  success: boolean;
  user?: {
    firstName: string;
    lastName: string;
    email: string;
  }
}

export const SignupController: (data: SignupData) => Promise<SignupResponse | null> = async (data) => {
  let response: SignupResponse | null = null;
  await api({
    url: '/auth/signup',
    method: 'POST',
    data: data
  }).then(res => {
    showToast('success', res.data.message);
    response = res.data;
  }).catch(err => {
    showToast('error', err.message);
  })

  return response;
}



interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  token?: string;
  message: string;
  success: boolean;
  user?: {
    firstName: string;
    lastName: string;
    email: string;
  }
}

export const LoginController: (data: LoginData) => Promise<LoginResponse | null> = async (data) => {
  let response: LoginResponse | null = null;
  await api({
    url: 'auth/signin',
    method: 'POST',
    data: data
  }).then(res => {
    showToast('success', res.data.message);
    response = res.data;
  }).catch(err => {
    showToast('error', err.message);
  })

  return response;
}

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
    response = err
  })
  return response
}