# Mock

## 接口协议

### 入参

| 名称       | 类型     | 简述                                                                | 必填  |
| ---------- | -------- | ------------------------------------------------------------------- | ----- |
| `template` | `any`    | mock 数据模版参考[mock 规则](http://mockjs.com/examples.html#Basic) | true  |
| `sleep`    | `number` | 延迟响应（ms）                                                      | false |

### `/get GET`

- 地址：/get
- 协议：GET
- 入参：template=encodeURIComponent(JSON.stringify([mock 规则](http://mockjs.com/examples.html#Basic)))
- 响应：

```typescript
{
  success: boolean;
  data: any;
}
```

- 请求示例：

```javascript
fetch(`/get?template=${encodeURIComponent(JSON.stringify({ name: '@cname' }))}`, { method: 'GET' });
```

### `/get POST`

- 地址：/get
- 协议：POST
- 入参：{template:[mock 规则](http://mockjs.com/examples.html#Basic)}
- 响应：

```typescript
{
  success: boolean;
  data: any;
}
```

- 请求示例

```javascript
fetch('/get', {
  method: 'POST',
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
  body: JSON.stringify({ template: { name: '@cname' } }),
});
```
