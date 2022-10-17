let Mock = require('mockjs');

function responseDataTemplate(data, otherQuery) {
  return {
    code: 'Success',
    data: {
      ...data,
      ...otherQuery,
    },
  };
}

function getMock(query, next) {
  const { template, ...otherQuery } = query;
  const { pageSize = 10, pageNum } = otherQuery;
  let currentTemplate = {
    [`dataList|${pageSize}`]: [
      {
        name: '@name',
        age: '@integer(1,200)',
        id: '@id',
        range: '@range(1,10,2)',
        birthday: '@date("yyyy-yy-yy HH:mm:ss")',
        // joinTime: '@time("HH:mm:ss")',
        requestTime: '@now()',
        icon: '@image("100x100","#5a66ff","#fff","png","HI")',
        color: ['@color()', '@rgba()'],
        paragraph: '@paragraph(1, 3)',
        word: '@word',
        title: '@title',
        ctitle: '@ctitle',
        cparagraph: '@cparagraph(1,3)',
        cfirst: '@cfirst',
        clast: '@clast',
        regin: '@region',
        province: '@province',
        city: '@city',
        address: '@county(true)',
      },
    ],
  };
  if (template) {
    try {
      if (typeof template === 'string') {
        currentTemplate = JSON.parse(decodeURIComponent(template));
      } else if (typeof template === 'object') {
        currentTemplate = template;
      }
    } catch (err) {
      next(err);
      return;
    }
  }
  const data = Mock.mock(currentTemplate);
  return responseDataTemplate(data, otherQuery);
}

module.exports = {
  responseDataTemplate,
  getMock,
};
