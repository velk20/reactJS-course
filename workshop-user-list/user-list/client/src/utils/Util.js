import moment from 'moment/moment';

export const UserActions = {
    Details:'details',
    Edit:'edit',
    Delete:'delete',
    Add: 'add',
}

export const dateConverter = (date) => {
  return moment(date).format('MM.DD.YYYY, H:mm:ss')
}