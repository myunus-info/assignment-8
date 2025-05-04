export type TService = {
  bikeId: string;
  serviceDate: Date;
  description: string;
  status: 'pending' | 'in-progress' | 'done';
};
