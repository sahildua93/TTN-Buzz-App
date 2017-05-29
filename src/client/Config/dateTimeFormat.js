import moment from 'moment';

export default (dateString) => {
  return 'created buzz '+moment(dateString).fromNow();
}