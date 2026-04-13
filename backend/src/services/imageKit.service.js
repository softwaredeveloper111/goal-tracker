import ImageKit, { toFile } from '@imagekit/nodejs';
import config from "../config/config.js";



const client = new ImageKit({
  privateKey: config.IMAGEKIT_PRIVATE_KEY
});



async function uploadToImageKit(file) {
  try {
  const result =   await client.files.upload({
  file: await toFile(Buffer.from(file.buffer), 'file'),
  fileName: `avatar_${Date.now()}.jpg`,
  folder: '/goal-tracker/avatar'
});
    return result.thumbnailUrl; 
  } catch (error) {
    console.error('Error uploading to ImageKit:', error);
    throw new Error('Failed to upload image');
  }
}



export default uploadToImageKit;