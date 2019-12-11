import * as moment from 'moment';
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
}) => {
  const newTags = tags.map(tagId => ({
    tag_id: tagId,
  }));
  return axios.post(`/record/${teamId}/${userId}`, {
    date: moment().format('Y-M-D'),
    mood_id: mood.id,
    tags: newTags,
    comment,
  });
};

export default {
  create,
};
