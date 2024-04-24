export default class AppRoutes {
  static rootRoute = "/";

  static homeRoute = "/shop";
  static loginRoute = this.homeRoute + "/login";
  static registerRoute = this.homeRoute + "/register";
  static accountRoute = this.homeRoute + "/account";
  static productsRoute = this.homeRoute + "/products";
  static productRoute = this.homeRoute + "/product";
  static cartRoute = this.homeRoute + "/cart";

  static todoRoute = this.homeRoute + "/null";

  static payRoute = "/payment";
  static informationRoute = this.payRoute + "/information";
  static paymentRoute = this.payRoute + "/payment";
}
