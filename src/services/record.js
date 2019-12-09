import axios from './axios';

/**
 * Create record
 * @returns {*}
 */
const create = ({
  teamId,
  userId,
  mood,
  tags,
  comment,
}) => axios.post(`/record/${teamId}/${userId}`, {
  mood_id: mood.id,
  tags,
  comment,
});

export default {
  create,
};
