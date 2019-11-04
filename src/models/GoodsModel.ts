export interface GoodsModel {
  product_original: number,//原价
  product_id: number,//商品id
  product_price: number,
  product_name: string,//商品名称
  product_img: string,
  sales_volume?: number,//销量
  product_detail?: string,//详情
  product_jindu:number
}
