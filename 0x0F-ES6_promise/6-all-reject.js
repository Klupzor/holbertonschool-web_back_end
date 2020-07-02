const signUpUser = require('./4-all-reject');
const uploadPhoto = require('./5-all-reject');

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = await signUpUser(firstName, lastName);
  try {
    await uploadPhoto(fileName);
  } catch (err) {
    if (err) {
      return {
        status: 'rejected',
        value: `Error: ${fileName} cannot be processed`,
      };
    }
  }
  return { status: 'fulfilled', value: user };
}
