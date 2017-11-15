address  省市区联动
============

|Author|evan.fu|
|---|---
|E-mail|153668770@qq.com

---

## HTML
```html
<table class="testform">
    <tr>
        <th>地点</th>
        <td>
            <select id="addressProvince">
            </select>
            <select id="addressCity">
            </select>
            <select id="addressDistrict">
            </select>
        </td>
    </tr>
</table>
```


## script
### 1. use javascript
```javascript
var myAddress = new address({
    //自定义数据
    /*data : [
        {
            select : '#addressProvince',
            label : '省'
            value : xxx
        },
        {
            select : '#addressCity',
            label : '市'
            value : xxx
        },
        {
            select : '#addressDistrict',
            label : '区'
            value : xxx
        }
        //...支持无级扩展
    ],*/
    onInit : function(address){
        console.log(address);
        address.set(['湖北省', '武汉', '江汉区']);
    }
});
```  


##### Object function
|Name |Description|
|:--:|-----|
|`set`|设置值 @param (Array)|

```javascript
myAddress.set(['湖北省', '武汉', '江汉区']);
```

## Example
1. [Demo](https://awin8516.github.io/address/docs/)  