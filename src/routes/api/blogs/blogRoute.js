import express from 'express';
import blogController from '../../../controllers/blogs';
import blogValidator from '../../../middlewares/validators/blogValidator';
import authorize from '../../../middlewares/userAuthorization';
import { upload } from '../../../helpers/multer';

const router = express();

router.post('/create', upload.single('image'), authorize.userAuthorize, blogValidator.createBlog, blogController.createBlogs);
router.get('/read', blogController.getBlogs);
router.delete('/delete/:blog', authorize.userAuthorize, blogController.deleteBlogs);
router.patch('/update/:id', upload.single('image'), authorize.userAuthorize, blogController.updateBlog);
export default router;
