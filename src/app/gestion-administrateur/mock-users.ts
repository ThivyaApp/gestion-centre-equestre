import { bindCallback } from 'rxjs';
import { User } from './user';

export const USERS: User[] = [
  { id: 1, name: 'Groendu', email: 'brice@gmail.com', firstname: 'Brice', secondname: 'bg', num: '0660675951', licensenum: '10012358', usertype: 'admin' },
  { id: 2, name: 'Appudurai', email: 'thivya@gmail.com', firstname: 'Thivya', secondname: 'moche', num: '0660678551', licensenum: '10012359', usertype: 'admin' },
  { id: 3, name: 'Lopeze', email: 'douglas@gmail.com', firstname: 'Douglas', secondname: 'Douggy', num: '0660675585', licensenum: '10012353', usertype: 'admin' },
  { id: 4, name: 'Bogahawattage', email: 'sahani@gmail.com', firstname: 'Sahani', secondname: 'la boga', num: '0660675714', licensenum: '10012355', usertype: 'user' },
  { id: 5, name: 'Coulibaly', email: 'rokia@gmail.com', firstname: 'Rokia', secondname: 'couli', num: '0660669881', licensenum: '10012356', usertype: 'user' },
];