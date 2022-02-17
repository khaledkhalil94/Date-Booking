export interface IRawCompanyData {
  id: number;
  name: string;
  type: string;
  time_slots: Array<{
    start_time: string;
    end_time: string;
  }>;
}
