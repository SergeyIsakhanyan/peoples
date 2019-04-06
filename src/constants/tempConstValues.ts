import { People, OrderByTypes } from '../types/people';

export const data: People[] = [
  { id: 0, name: 'name', surname: 'surname', birthday: 'birthday', isSelected: false },
  { id: 1, name: 'name2', surname: 'surname2', birthday: 'birthday2', isSelected: false },
  { id: 2, name: 'name1', surname: 'surname1', birthday: 'birthday1', isSelected: false },
  { id: 3, name: 'name3', surname: 'surname3', birthday: 'birthday3', isSelected: false },
  { id: 4, name: 'name4', surname: 'surname4', birthday: 'birthday4', isSelected: false },
  { id: 5, name: 'name5', surname: 'surname5', birthday: 'birthday5', isSelected: false },
  { id: 6, name: 'name6', surname: 'surname6', birthday: 'birthday6', isSelected: false },
  { id: 7, name: 'name7', surname: 'surname7', birthday: 'birthday7', isSelected: false },
];

export const rows = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
  { id: 'surname', numeric: false, disablePadding: false, label: 'Surname' },
  { id: 'birthday', numeric: false, disablePadding: false, label: 'Birthday' },
] as Array<{ id: OrderByTypes; numeric: boolean; disablePadding: boolean; label: string }>;
