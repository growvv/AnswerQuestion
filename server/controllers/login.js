// 登录授权接口
module.exports = async (ctx, next) => {
    // 通过 Koa 中间件进行登录之后
    // 登录信息会被存储到 ctx.state.$wxInfo
    // 具体查看：
    if (ctx.state.$wxInfo.loginState) {
        ctx.state.data = ctx.state.$wxInfo.userinfo
    }
}

// 校验登录态
// router.get('/user', validationMiddleware, ctx => {
//   console.log(ctx.state.$wxInfo)
//   // {
//   //   loginState: 0  // 1表示登录成功，0表示登录失败
//   //   userinfo: { // 用户信息 }
//   // }
// })
// router.get('/user', validationMiddleware, controllers.user)
