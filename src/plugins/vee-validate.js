import {
  required, email, min, confirmed,
} from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';
import { messages } from 'vee-validate/dist/locale/pt_BR.json';

const rules = {
  required,
  email,
  min,
  confirmed,
};

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule],
  });
});
