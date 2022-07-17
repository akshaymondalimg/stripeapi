import product from './productRoute.js'
import user from './userRoute.js'

const apiRoutePrefix = '/api/v1'

export default (app) => {
    app.use(apiRoutePrefix, product);
    app.use(apiRoutePrefix, user);
}