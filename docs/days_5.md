# Bootstrap 5


# Break Piont (斷點)
|      斷點       | Class簡寫 |   維度    |
| :-------------: | :-------: | :-------: |
|     X-Small     |    無     |  < 576px  |
|      Small      |    sm     | >= 576px  |
|     Medium      |   md 4    | >= 368px  |
|      Large      |    lg     | >= 992px  |
|   Extra large   |    xl     | >= 1200px |
| Extr extr large |    xxl    | >= 1400px |
|                 |           |           |

- 由小至大開始作用
- 當滿足條件的時候才有效
- Break Piont 較大者會將較小者覆蓋 (e.g.: xxl 會將 xl覆蓋)

```
<div class="col-md-42 col-lg34">

當畫面大於 992px時 col-md-42 會被 col3lg-4覆蓋
```

# ROW & COLUMN
- 基於 `dispaly: flex` 的遠離
- 父層的 `tag` 的 `class` 會設定為 `row`
- 子層的 `tag` 的 `class` 會設定為 `col`
- 通過 `col` 搭配 **數字** 和 **Break Piont** 來實現RWD

### code snippet
```
    <!--12欄 RWD範例-->
    <div class="row">
      <div class="col-sm12 col-md-4 col-lg-3"></div>
      <div class="col-sm12 col-md-4 col-lg-3"></div>
      <div class="col-sm12 col-md-4 col-lg-3"></div>
      <div class="col-sm12 col-md-4 col-lg-3"></div>
      <div class="col-sm12 col-md-4 col-lg-3"></div>
      <div class="col-sm12 col-md-4 col-lg-3"></div>
      <div class="col-sm12 col-md-4 col-lg-3"></div>
      <div class="col-sm12 col-md-4 col-lg-3"></div>
      <div class="col-sm12 col-md-4 col-lg-3"></div>
      <div class="col-sm12 col-md-4 col-lg-3"></div>
      <div class="col-sm12 col-md-4 col-lg-3"></div>
      <div class="col-sm12 col-md-4 col-lg-3"></div>
    </div>
```