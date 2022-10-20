# Chaneg'mock

| 协议 | 地址 | 入参                                                         | 示例                                                         |
| :--- | :--- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| GET  | /get | template=encodeURIComponent(JSON.stringify([mock规则](http://mockjs.com/examples.html#Basic))) | fetch(\`/get?template=${encodeURIComponent(JSON.stringify({name:'@cname'}))}\`,{method="GET",}) |
| POST | /get | {template:[mock规则](http://mockjs.com/examples.html#Basic)} | fetch('/get', {  method: 'POST',headers: {'Content-type': 'application/json; charset=UTF-8'},body: JSON.stringify({ template: { name: '@cname' }}),}) |
