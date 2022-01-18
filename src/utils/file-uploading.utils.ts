import { extname } from 'path';

export const jsonFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(json)$/)) {
    return callback(new Error('Only image files are allowed!'), false);
  }
  callback(null, true);
};

export const editFileName = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const currentDateTime = new Date();
  callback(null, `${name}-${currentDateTime.getTime()}${fileExtName}`);
};
