export interface MerchantModel {
  id?: string,//店铺编号
  address: string,//店铺地址
  name: string,//店主姓名
  cover?: string,//门头图
  phone: string,
  idcard: string,//身份证
  businessLicense?: string,//营业执照
  time: string | number,//入驻时间
  selector:any[],
  selectorChecked:string,
  addressId:any[],
  addressIdChecked:string,
  checkedCity:string,
  AddressIdCity:string,
  countycheckedAddress:string,
  countychecked:string,
  Cityselector:any[],
  CityaddressId:any[],
  countySelector:any[],
  countyAddressId:any[],
  userTel:string,
  userCode:string,
  userId:string,
  userName:string,
  zheng:string,
  fan:string,
}
