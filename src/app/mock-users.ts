import { bindCallback } from 'rxjs';
import { User } from './user';

export const USERS: User[] = [
  { id: 1, email: 'brice@gmail.com', password: 'passytest', firstname: 'Brice', lastname: 'bg', num: '0660675951', licensenum: '10012358', usertype: 'admin' },
  { id: 2, email: 'thivya@gmail.com', password: 'passytest',firstname: 'Thivya', lastname: 'moche', num: '0660678551', licensenum: '10012359', usertype: 'admin' },
  { id: 3, email: 'douglas@gmail.com', password: 'passytest',firstname: 'Douglas', lastname: 'Douggy', num: '0660675585', licensenum: '10012353', usertype: 'admin' },
  { id: 4, email: 'sahani@gmail.com', password: 'passytest',firstname: 'Sahani', lastname: 'la boga', num: '0660675714', licensenum: '10012355', usertype: 'user' },
  { id: 5, email: 'rokia@gmail.com', password: 'passytest', firstname: 'Rokia', lastname: 'couli', num: '0660669881', licensenum: '10012356', usertype: 'user' },
  { id: 1, email: 'brice@gmail.com', password: 'passytest', firstname: 'Brice', lastname: 'bg', num: '0660675951', licensenum: '10012358', usertype: 'admin' },
  { id: 2, email: 'thivya@gmail.com', password: 'passytest',firstname: 'Thivya', lastname: 'moche', num: '0660678551', licensenum: '10012359', usertype: 'admin' },
  { id: 3, email: 'douglas@gmail.com', password: 'passytest',firstname: 'Douglas', lastname: 'Douggy', num: '0660675585', licensenum: '10012353', usertype: 'admin' },
  { id: 4, email: 'sahani@gmail.com', password: 'passytest',firstname: 'Sahani', lastname: 'la boga', num: '0660675714', licensenum: '10012355', usertype: 'user' },
  { id: 5, email: 'rokia@gmail.com', password: 'passytest', firstname: 'Rokia', lastname: 'couli', num: '0660669881', licensenum: '10012356', usertype: 'user' }
];