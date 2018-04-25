/**
 * @apiHeader Campaigns hihihih
 */

/**
 * @api {post} /campaigns Create a campaign
 * @apiName CreateCampaign
 * @apiGroup Campaigns
 *
 * @apiDescription text
 *
 * @apiParam {String} role_id Name of a role.
 *
 * @apiSuccess {boolean} privilege Type of privilege for specific resource.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "privilege": ...
 *     }
 *
 * @apiError RoleNotFound  Error Finding Role.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "RoleNotFound"
 *     }
 */

/**
 * @api {post} /roles Create a role
 * @apiName CreateRole
 * @apiGroup Roles
 *
 * @apiParam {String} role_id Name of the role to be created.
 * @apiParam {boolean} privilege Value for privilege.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 */

/**
 * @api {put} /roles/{id} Modify privileges for role
 * @apiName UpdateRole
 * @apiGroup Roles
 *
 * @apiParam {String} role_id Name of the role to be changed.
 * @apiParam {boolean} privilege Value for privilege to be changed.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiError RoleNotFound  Error Finding Role.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "RoleNotFound"
 *     }
 */

/**
 * @api {get} /roles/{id} Get privileges for specific role
 * @apiName GetRole
 * @apiGroup Roles
 *
 * @apiParam {String} role_id Name of a role.
 *
 * @apiSuccess {boolean} privilege Type of privilege for specific resource.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "privilege": ...
 *     }
 *
 * @apiError RoleNotFound  Error Finding Role.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "RoleNotFound"
 *     }
 */

/**
 * @api {get} /roles Get all roles
 * @apiName GetAllRoles
 * @apiGroup Roles
 *
 * @apiSuccess {String} role_id Name of a role.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "role_id": "admin",
 *     }
 *
 * @apiError RoleNotFound  Error Finding Role.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "RoleNotFound"
 *     }
 */

/**
 * @api {delete} /roles/{id} Delete a role
 * @apiName DeleteRole
 * @apiGroup Roles
 *
 * @apiParam {String} role_id Name of the role that will be changed.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiError RoleNotFound  Error Finding Role.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "RoleNotFound"
 *     }
 */

/**
 * @api {delete} /users/{id} Delete user
 * @apiName DeleteUser
 * @apiGroup Users
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiError UserNotFoundError  Error Finding Users.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFoundError"
 *     }
 */

/**
 * @api {post} /users/{id} Update user information
 * @apiName UpdateUser
 * @apiGroup Users
 *
 * @apiParam {id} user_id ID of active user.
 * @apiParam {String} [role_id] Role of active user.
 * @apiParam {String} [name] Name of active user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiError UserNotFoundError  Error Finding Users.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFoundError"
 *     }
 */

/**
 * @api {get} /users Get all users
 * @apiName GetAllUsers
 * @apiGroup Users
 *
 * @apiSuccess {id} user_id ID of active user.
 * @apiSuccess {String} role_id Role of active user.
 * @apiSuccess {String} name Name of active user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "user_id": "0001",
 *       "role_id": "admin",
 *       "name": "doe",
 *     }
 *
 * @apiError UserNotFoundError  Error Finding Users.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFoundError"
 *     }
 */

/**
 * @api {get} /users/logout Logout a user
 * @apiName Logout
 * @apiGroup Users
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiError LogoutError Error loging out user.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *       "error": "LogoutError"
 *     }
 */

/**
 * @api {get} /users/login Login a user
 * @apiName Login
 * @apiGroup Users
 *
 * @apiSuccess {id} user_id ID of active user.
 * @apiSuccess {String} role_id Role of active user.
 * @apiSuccess {String} name Name of active user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "user_id": "0001",
 *       "role_id": "admin",
 *       "name": "doe",
 *     }
 *
 * @apiError LoginError Error loging in user.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *       "error": "LoginError"
 *     }
 */

/**
 * @apiDefine ApplicantNotFoundError
 *
 * @apiError ApplicantNotFound The id of the Applicant was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ApplicantNotFound"
 *     }
 */

/**
 * @api {put} /applicant/{id} Modify applicant information
 * @apiName PutApplicant
 * @apiGroup Applicants
 *
 * @apiParam {Number} id          Applicant's unique ID.
 * @apiParam {String} [first_name] First name of the Applicant.
 * @apiParam {String} [last_name]  Last name of the Applicant.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiUse ApplicantNotFoundError
 */

/**
 * @api {get} /applicants/{id} Get information about specific Applicant
 * @apiName GetApplicant
 * @apiGroup Applicants
 *
 * @apiParam {Number} id Applicant's unique ID.
 *
 * @apiSuccess {int} applicant_id ID of the Applicant.
 * @apiSuccess {String} first_name Firstname of the Applicant.
 * @apiSuccess {String} last_name  Lastname of the Applicant.
 * @apiSuccess {String} preferred_name Preferred name of the Applicant.
 * @apiSuccess {String} email  Email of the Applicant.
 * @apiSuccess {String} phone Phone number of the Applicant.
 * @apiSuccess {String} school  School of the Applicant.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "applicant_id": "0001",
 *       "first_name": "John",
 *       "last_name": "Doe",
 *       "preferred_name": "Johnny",
 *       "email": "johnny_boi@hotmail.com",
 *       "phone": "6048827620",
 *       "school": "SFU",
 *     }
 *
 * @apiUse ApplicantNotFoundError
 */

/**
 * @api {get} /applicants Get all applicants
 * @apiName GetAllApplicants
 * @apiGroup Applicants
 *
 * @apiSuccess {int} applicant_id ID of the Applicant.
 * @apiSuccess {String} first_name Firstname of the Applicant.
 * @apiSuccess {String} last_name  Lastname of the Applicant.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "applicant_id": "0001",
 *       "first_name": "John",
 *       "last_name": "Doe",
 *     }
 *
 * @apiUse ApplicantNotFoundError
 */

/**
 * @api {post} /applicants Create an applicant
 * @apiName CreateApplicant
 * @apiGroup Applicants
 *
 * @apiParam {int} id Applicant's unique ID.
 * @apiParam {String} first_name Firstname of the Applicant.
 * @apiParam {String} last_name  Lastname of the Applicant.
 * @apiParam {String} [preferred_name] Preferred name of the Applicant.
 * @apiParam {String} email  Email of the Applicant.
 * @apiParam {String} phone Phone number of the Applicant.
 * @apiParam {String} school  School of the Applicant.
 *
 * @apiSuccess {id} applicant_id ID of the new applicant.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "applicant_id": "0001",
 *     }
 *
 * @apiError ApplicantNotCreated Error creating applicant.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *       "error": "ApplicantNotCreated"
 *     }
 */
