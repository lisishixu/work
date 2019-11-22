// 某些后端格式和atui要求字段不一样，在这里封装方法进行转换


export const toAtTabs = (array) => {
  if (typeof array !== 'object') return;
  const newArr = array.map(o => {
    return {title: o.value}
  });
  return newArr;
};


export const toAtGrid = (array, needAll: boolean = false) => {
  if (typeof array !== 'object') return;
  const newArr = array.map(o => {
    return {
      id: o.classifyId,
      image: o.classifyImg,
      value: o.classifyName,
    }
  });
  if (needAll) {
    newArr.push({
      id: 'all',
      image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
      value: '全部分类',
    });
  }
  return newArr;
};

