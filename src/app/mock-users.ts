import { bindCallback } from 'rxjs';
import { User } from './user';

export const USERS: User[] = [
  { id: 1, username: 'fakeusername', email: 'brice@gmail.com', password: 'passytest', firstname: 'Brice', lastname: 'bg', num: '0660675951', licensenum: '10012358', userType: 'admin' },
  { id: 2, username: 'fakeusername', email: 'thivya@gmail.com', password: 'passytest',firstname: 'Thivya', lastname: 'moche', num: '0660678551', licensenum: '10012359', userType: 'admin' },
  { id: 3, username: 'fakeusername',  email: 'douglas@gmail.com', password: 'passytest',firstname: 'Douglas', lastname: 'Douggy', num: '0660675585', licensenum: '10012353', userType: 'admin' },
  { id: 4, username: 'fakeusername', email: 'sahani@gmail.com', password: 'passytest',firstname: 'Sahani', lastname: 'la boga', num: '0660675714', licensenum: '10012355', userType: 'user' },
  { id: 5, username: 'fakeusername', email: 'rokia@gmail.com', password: 'passytest', firstname: 'Rokia', lastname: 'couli', num: '0660669881', licensenum: '10012356', userType: 'user' },
  { id: 1, username: 'fakeusername', email: 'brice@gmail.com', password: 'passytest', firstname: 'Brice', lastname: 'bg', num: '0660675951', licensenum: '10012358', userType: 'admin' },
  { id: 2, username: 'fakeusername', email: 'thivya@gmail.com', password: 'passytest',firstname: 'Thivya', lastname: 'moche', num: '0660678551', licensenum: '10012359', userType: 'admin' },
  { id: 3, username: 'fakeusername', email: 'douglas@gmail.com', password: 'passytest',firstname: 'Douglas', lastname: 'Douggy', num: '0660675585', licensenum: '10012353', userType: 'admin' },
  { id: 4, username: 'fakeusername', email: 'sahani@gmail.com', password: 'passytest',firstname: 'Sahani', lastname: 'la boga', num: '0660675714', licensenum: '10012355', userType: 'user' },
  { id: 5, username: 'fakeusername', email: 'rokia@gmail.com', password: 'passytest', firstname: 'Rokia', lastname: 'couli', num: '0660669881', licensenum: '10012356', userType: 'user' }
];