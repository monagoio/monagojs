export const config = {
    MONAGO_ADMIN_URI :process.env.MONAGO_ADMIN_URI ||  "https://secure.monago.io" ,
    MONAGO_CLIENT_URI : process.env.MONAGO_CLIENT_URI || "https://api.monago.io",
    MONAGO_PRIVATE_SESSION_EXP: Number(process.env.MONAGO_PRIVATE_SESSION_EXP) || 30
}