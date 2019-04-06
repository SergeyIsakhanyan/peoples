export interface People {
  id: number;
  name: string;
  surname: string;
  birthday: string;
  isSelected: boolean;
}

export type OrderByTypes = 'name' | 'surname' | 'birthday';
