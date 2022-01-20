import { extname } from 'path';
import { IVALID_INPUT_FILE_TYPE } from './constants/constants';

export const jsonFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(json)$/)) {
    req.fileValidationError = IVALID_INPUT_FILE_TYPE;
    return callback(null, false);
  }
  callback(null, true);
};

export const editFileName = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const currentDateTime = new Date();
  callback(null, `${name}-${currentDateTime.getTime()}${fileExtName}`);
};
