// 某些后端格式和atui要求字段不一样，在这里封装方法进行转换


export const toAtTabs = (array) => {
  if (typeof array !== 'object') return;
  const newArr = array.map(o => {
    return {title: o.value}
  });
  return newArr;
};

