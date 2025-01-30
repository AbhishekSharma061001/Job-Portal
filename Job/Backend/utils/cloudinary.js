import {v2 as cloudinary} from 'cloudinary';
import dotenv from 'dotenv'

dotenv.config();

cloudinary.config({
    cloud_name:'dysn6sicj',
    api_key:166841875286316,
    api_secret:'BYFp4KN-gLs0zk64Mo-tKyCazyE'
});


export default cloudinary;