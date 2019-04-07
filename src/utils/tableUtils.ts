import { People, OrderByTypes } from '../types/people';

export const sortTable = (arr: People[], type: string, orderBy: OrderByTypes) => {
  if (type === 'asc') {
    return arr.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));
  }
  return arr.sort((a, b) => (a[orderBy] > b[orderBy] ? -1 : 1));
};

export const getSelectedItemsCount = (data: People[]) => {
  return data.filter(item => item.isSelected).length;
};

export const getNextElId = (arr: People[]) => {
  if (!arr.length) {
    return 0;
  } else {
    let elWithMaxId = arr.reduce((a, b) => (Math.max(a.id, b.id) ? b : a));
    return elWithMaxId.id + 1;
  }
};
