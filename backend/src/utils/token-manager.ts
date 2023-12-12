import jwt from 'jsonwebtoken'
export const createToken = (id: string, email: string, expiresIn: string) => {
    const payload = { id, email };

    if (!process.env.JWT_SECRET) {
        throw new Error('JWT secret is not defined.');
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn,
    });
    return token;
}
