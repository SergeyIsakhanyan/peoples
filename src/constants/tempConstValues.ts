import { People, OrderByTypes } from '../types/people';

export const data: People[] = [
  { id: 0, name: 'name', surname: 'surname', birthday: '1981-01-01', isSelected: false },
  { id: 1, name: 'name2', surname: 'surname2', birthday: '1985-01-01', isSelected: false },
  { id: 2, name: 'name1', surname: 'surname1', birthday: '1981-01-01', isSelected: false },
  { id: 3, name: 'name3', surname: 'surname3', birthday: '1988-01-01', isSelected: false },
  { id: 4, name: 'name4', surname: 'surname4', birthday: '1971-01-01', isSelected: false },
  { id: 5, name: 'name5', surname: 'surname5', birthday: '1981-01-01', isSelected: false },
  { id: 6, name: 'name6', surname: 'surname6', birthday: '1991-01-01', isSelected: false },
  { id: 7, name: 'name7', surname: 'surname7', birthday: '1981-01-01', isSelected: false },
];

export const rows = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
  { id: 'surname', numeric: false, disablePadding: false, label: 'Surname' },
  { id: 'birthday', numeric: false, disablePadding: false, label: 'Age' },
] as Array<{ id: OrderByTypes; numeric: boolean; disablePadding: boolean; label: string }>;
