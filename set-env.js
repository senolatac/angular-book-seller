const {writeFile} = require('fs');

require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.ts`;

const envFileContent = `
export const environment = {
  production: ${isProduction},
  BASE_URL: "${process.env.BASE_URL}"
};
`;

writeFile(targetPath, envFileContent, (err) => {
  if (err) {
    throw console.error(err);
  }
})
