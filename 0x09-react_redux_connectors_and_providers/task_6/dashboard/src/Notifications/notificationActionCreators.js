export const MARK_AS_READ = 'MARK_AS_READ';

export const markAsRead = (id) => ({
  type: MARK_AS_READ,
  payload: id
});
