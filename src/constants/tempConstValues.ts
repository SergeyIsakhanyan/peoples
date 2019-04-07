import { People, OrderByTypes } from '../types/people';

export const rows = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
  { id: 'surname', numeric: false, disablePadding: false, label: 'Surname' },
  { id: 'birthday', numeric: false, disablePadding: false, label: 'Age' },
] as Array<{ id: OrderByTypes; numeric: boolean; disablePadding: boolean; label: string }>;
