import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

import { PoiModel } from './models/pois.model';
import { TagModel } from './models/tag.model';
import { CreatePointsOfInterestDTO } from './dto/pointsOfInterest.dto';
import { CompaniesModel } from './models/companies.model';
import { CreateCompanyDTO } from './dto/company.dto';
import { CreateTagsDTO } from './dto/tags.dto';

const API_URL = 'http://192.168.67.143:4000/';

axios.interceptors.request.use(
  async (config: any) => {
    const token = await SecureStore.getItemAsync('token');

    if (token != null) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err: any) => {
    return Promise.reject(err);
  },
);

// POIS

export const getPois = async (): Promise<PoiModel[]> =>
  await axios.get(`${API_URL}pois`);

export const getPoi = async (_id: string | number): Promise<PoiModel> =>
  await axios.get(`${API_URL}pois/${_id}`);

export const postPoi = async (
  _data: CreatePointsOfInterestDTO,
): Promise<PoiModel> => await axios.post(`${API_URL}pois`, _data);

export const deletePoi = async (_id: string | number): Promise<any> =>
  await axios.delete(`${API_URL}pois/${_id}`);

// TAGS

export const getTags = async (): Promise<TagModel[]> =>
  await axios.get(`${API_URL}tags`);

export const postTags = async (_data: CreateTagsDTO): Promise<TagModel> =>
  await axios.post(`${API_URL}tags`, _data);

export const deleteTag = async (_id: string | number): Promise<any> =>
  await axios.delete(`${API_URL}tags/${_id}`);

// LOGIN

export const getUser = async (id: string) => {
  return await axios.get(`${API_URL}users/${id}`);
};

export const updateUser = async (user: {
  id: string;
  lastName: string;
  firstName: string;
  email: string;
  picture: string;
}) => {
  return await axios.patch(`${API_URL}users`, { ...user });
};

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<any> =>
  await axios.post(`${API_URL}auth/login`, {
    email,
    password,
  });

export const createUser = async ({
  firstName,
  lastName,
  email,
  password,
}: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}): Promise<any> =>
  await axios.post(`${API_URL}users`, {
    firstName,
    lastName,
    email,
    hashedPassword: password,
    picture: '',
  });

// COMPANIES

export const getCompanies = async (): Promise<CompaniesModel[]> =>
  await axios.get(`${API_URL}clients`);

export const postCompanies = async (
  _data: CreateCompanyDTO,
): Promise<CompaniesModel> =>
  await axios.post(`${API_URL}clients`, { clients: [{ ..._data }] });

export const getSingleCompanies = async (): Promise<any> =>
  await axios.get(`${API_URL}`);

export const deleteCompany = async (_id: string | number): Promise<any> =>
  await axios.delete(`${API_URL}clients/${_id}`);

// THEMES

export const getThemes = async () => await axios.get(`${API_URL}themes`);

export const postTheme = async (theme: any) =>
  await axios.post(`${API_URL}themes`, { theme });

export const deleteTheme = async (_id: string | number): Promise<any> =>
  await axios.delete(`${API_URL}themes/${_id}`);

// USER

export const getUserImg = (img: string) => `${API_URL}users/${img}`;

export const uploadImg = async (file: any) =>
  await axios.post(`${API_URL}users/upload`, file, {
    headers: {
      'content-type':
        'multipart/form-data; boundary=---011000010111000001101001',
    },
  });
