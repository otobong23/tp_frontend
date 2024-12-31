import api from '@/utils/axios';
import { showToast } from '@/utils/alert';
// import Signup from '../app/auth/signup/components/Signup';

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
  user?:{
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

export interface LoginResponse{
  token?: string;
  message: string;
  success: boolean;
  user?:{
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