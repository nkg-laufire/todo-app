import moment from 'moment';

const diffInDays = (dueOn) => moment(dueOn).fromNow();

export { diffInDays };
