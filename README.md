# Thành's Thursday #3: Chinh phục map, filter và reduce

## Giới thiệu

Bài tập bổ trợ cho buổi workshop Thành's Thursday #3 - Chinh phục `map`, `filter` và `reduce`

**Đề bài:** X là chủ shop Y. X tạo một sản phẩm có nhiều variant. X muốn mỗi variant sẽ là một item được hiển thị trên website của mình. Yêu cầu của custom product như sau:

- Add cart được & đúng variant (tức có `variantId`)
- Tiêu đề sẽ có dạng: `Tiêu đề sản phẩm - Thuộc tính 1 / Thuộc tính 2 / ...`
- Bắt buộc có hình ảnh. Nếu variant không được set hình thì lấy hình đại diện của sản phẩm
- Cần biết trạng thái của custom product có mua được hay không (`available`). Rule như sau:
  - Nếu sản phẩm không quản lý kho --> ok
  - Nếu sản phẩm có quản lý kho & cho mua khi hết hàng --> ok
  - Trường hợp còn lại: --> not ok
- Có các thông tin thêm như `type`, `vendor`, ... hỗ trợ khi xem detail

Sau khi nghiên cứu nhu cầu khách hàng, Thành quyết định tổ chức data dạng sau:

```js
let data = {
  "123": {
    id: 123, // variant id
    // ... other variant props
  },
}
```

Hãy sửa hàm `transformProductVariantsToCustomProductsMap()` để thỏa mãn các yêu cầu trên.

## Yêu cầu

- [Node][node]
- [Git][git]

## Cài đặt

```bash
# Clone repo
git clone https://github.com/thanh-nguyen-95/thanhs-thurday-3-practice
cd thanhs-thursday-3-practice

# Install packages
npm install

# Dev
npm run dev

# Test
npm run test
```
