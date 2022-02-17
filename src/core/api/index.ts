import restInstance from '../../adapters';
import {IRawCompanyData} from './types';

export const getData = async (): Promise<IRawCompanyData[]> => {
  const rawData = await restInstance.get<IRawCompanyData[]>('/data');
  return rawData.data;
};
