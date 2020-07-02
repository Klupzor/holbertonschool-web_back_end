const signUpUser = require('./4-all-reject');
const uploadPhoto = require('./5-all-reject');

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const data = [];
  const user = await signUpUser(firstName, lastName);
  try {
    data.push({ status: 'fulfilled', value: user });
    await uploadPhoto(fileName);
  } catch (err) {
    data.push({
      status: 'rejected',
      value: `Error: ${fileName} cannot be processed`,
    });
  }
  return data;
}
