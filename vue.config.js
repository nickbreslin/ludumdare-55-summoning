module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? `${process.env.VUE_APP_DEPLOY_PATH}/`
      : "/",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = args[0].title.replace("-", " ");
      args[0].title =
        args[0].title.charAt(0).toUpperCase() + args[0].title.slice(1);

      return args;
    });
  }
  // Source: https://forum.vuejs.org/t/loading-local-fonts-not-working/92959/3
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `@import "~@/assets/scss/_test.scss";`
  //     }
  //   }
  // }
};
