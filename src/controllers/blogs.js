import blogService from '../services/blogService';
import Util from '../helpers/utils';
import { uploadToCloud } from '../helpers/cloud';

const util = new Util();

export default class blogs {
  static async createBlogs(req, res) {
    try {
      const blogsImage = await uploadToCloud(req.file, res);
      const blog = {
        title: req.body.title,
        content: req.body.content,
        conclusion: req.body.conclusion,
        image: blogsImage.url
      };
      const newBlog = await blogService.create(blog);
      util.setSuccess(201, 'You have successfully created a Blog Post', newBlog);
      util.send(res);
    } catch (error) {
      util.setError(500, error.message);
      util.send(res);
    }
  }

  static async getBlogs(req, res) {
    try {
      const blogs = await blogService.getBlogs();
      util.setSuccess(200, 'Blog Post List', blogs);
      util.send(res);
    } catch (error) {
      util.setError(500, error.message);
      util.send(res);
    }
  }

//   static async getAccomBylocatonId(req, res) {
//     try {
//       // eslint-disable-next-line camelcase
//       const { location_id } = req.params;
//       const accomodation = await accomodationService.findByProp({ location_id });
//       util.setSuccess(200, 'Accomodation', accomodation);
//       util.send(res);
//     } catch (error) {
//       util.setError(500, error.message);
//       util.send(res);
//     }
//   }

//   static async deleteAcoomodations(req, res) {
//     try {
//       const { accomodation } = req.params;
//       const takeOutAccomodation = await accomodationService.deleteAccomodation(accomodation);
//       if (takeOutAccomodation) {
//         util.setSuccess(200, 'You deleted an accomodation');
//         util.send(res);
//       } else {
//         util.setError(200, 'There is nothing to delete');
//         util.send(res);
//       }
//     } catch (error) {
//       util.setError(500, error.message);
//       util.send(res);
//     }
//   }

//   static async updateAccomodation(req, res) {
//     try {
//       const accomodationImage = await uploadToCloud(req.file, res);
//       const { id } = req.params;
//       const updated = await accomodationService.updateAtt({
//         name: req.body.name,
//         description: req.body.description,
//         location_id: req.body.location_id,
//         facilities: req.body.facilities,
//         cost: req.body.cost,
//         capacity: req.body.capacity,
//         roomsLeft: req.body.roomsLeft,
//         averageRating: req.body.averageRating,
//         image: accomodationImage.url
//       }, { id });
//       if (updated) {
//         util.setSuccess(200, 'You have successfuly updated an accomodation');
//         util.send(res);
//       }
//     } catch (error) {
//       util.setError(500, error.message);
//       util.send(res);
//     }
//   }
// }
