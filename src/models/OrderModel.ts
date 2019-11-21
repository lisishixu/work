export interface OrderModel {
  agentId?: string
  endTime?: string
  groupBy?: string
  hide?: string
  insertTime?: string | number
  orderBalance?: string
  orderBy?: string
  orderId?: string | number
  orderNum?: string | number
  orderPayAmount?: number
  orderPaystyle?: string | number
  orderState?: number
  orderTotalMoney?: number
  orderType?: string
  orderdetails: any[]
  pageNum?: number
  pageSize?: number
  payTime?: string
  pickerName?: string
  pickerTel?: string
  pickingTime?: string
  sellerId?: string
  sendTime?: string
  startTime?: string
  userId?: number
  writeOffCode?: string
}
