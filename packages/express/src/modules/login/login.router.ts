import express from 'express';
import LoginController from './login.controller';

const ctrl = new LoginController();
const router = express.Router();

// /**
//  * POST /api/admin/reissue/refreshtoken
//  * @summary reissue refreshtoken
//  * @tags Admin API
//  * @param {string} request.body.required
//  * @return {AdminReturn} 200 - success response - application/json
//  * @return {Error} 400 - Bad request response
//  */
router.route('/getUser').get(ctrl.getUser);
router.route('/postUser').post(ctrl.postUser);
export default router;
