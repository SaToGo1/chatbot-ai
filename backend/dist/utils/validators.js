import { body, validationResult } from 'express-validator';
/**
 * Gets a Validation chain and return a callback that checks if the body data
 * correctly fullfills every validation of the validation chain.
 *
 * if there is no error, calls the next callback.
 *
 * @param validations {ValidationChain[]} contains different validations
 * @returns async callback that runs the validations.
 */
export const validate = (validations) => {
    return async (req, res, next) => {
        // for every validation in validation chain make sure the data is correct.
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
        }
        const errors = validationResult(req);
        // if no errors in the validation, call the next callback.
        if (errors.isEmpty()) {
            return next();
        }
        // if error in validation - 422 UNPROCESABLE ENTITY
        return res.status(422).json({ errors: errors.array() });
    };
};
// VALIDATION CHAINS, 
export const loginValidator = [
    body("email").trim().notEmpty().isEmail().withMessage('email is required'),
    body("password")
        .trim()
        .isLength({ min: 6 })
        .withMessage('password should contain atleast 6 characters'),
];
export const signupValidator = [
    body("name").notEmpty().withMessage('Name is required'),
    ...loginValidator
];
//# sourceMappingURL=validators.js.map