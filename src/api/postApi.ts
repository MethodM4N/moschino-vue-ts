import { TPost, TPostById } from '@/types/types';
import axios from 'axios';

const URL = 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts';

export const fetchTotalPages = async (): Promise<number | undefined> => {
  const response = await axios.get(`${URL}`);
  return response.data.length;
};

export const fetchPosts = async (page: number, limit: number): Promise<TPost[] | undefined> => {
  const _page = page.toString();
  const _limit = limit.toString();
  const response = await axios.get(`${URL}?completed=false&page=${_page}&limit=${_limit}`);

  return response.data;
};

export const fetchPostById = async (id: string): Promise<TPostById | undefined> => {
  const response = await axios.get(`${URL}/${id}`);
  return response.data;
};
