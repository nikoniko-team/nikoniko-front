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
}) => axios.post(`/record/${teamId}/${userId}`, {
  mood_id: mood.id,
  tags,
});

export default {
  create,
};
