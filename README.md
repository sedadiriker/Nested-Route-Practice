# Nested Route Kullanımı

Nested route, birçok modern web uygulamasında kullanılan bir yönlendirme yöntemidir. Bu yöntem, bir ana bileşen içinde başka bileşenlerin gösterilmesini sağlar. Özellikle karmaşık veya hiyerarşik veri yapılarına sahip uygulamalarda yaygın olarak kullanılır.

## Nasıl Yapılır?

1. **Ana Route Oluşturma**: İlk adım olarak, ana route'unuzu oluşturmanız gerekir. Bu, genellikle uygulamanızın ana bileşeni için yapılır.

2. **Nested Route Oluşturma**: Ana bileşeninizde başka bir bileşene gömülü bir bileşen oluşturursunuz ve bunun için bir nested route tanımlarsınız. Bu, genellikle bir alt bileşenin daha fazla detayını göstermek için yapılır.

3. **Router Outlet Kullanımı**: Nested route kullanırken, genellikle `Router Outlet` bileşenini kullanırsınız. Bu bileşen, içine gömülü bileşenleri dinamik olarak göstermek için kullanılır. Ana bileşeninizde bu bileşeni kullanarak nested route'ları gösterirsiniz.

## Örnek

```javascript
<div>
  <BrowserRouter>
    <Routes>
      {/* Ana Route: Ana sayfa */}
      <Route path="/" element={<Home />} />

      {/* Ana Route: Giriş Yap */}
      <Route path="/login" element={<Login />} />

      {/* Ana Route: Kullanıcı */}
      <Route path="/user" element={<User />}>
        {/* Nested Route: Kullanıcı Ana Sayfa */}
        <Route index path="" element={<UserHome/>}/>

        {/* Nested Route: Kullanıcı Ürünleri */}
        <Route path="userProduct" element={<UserProduct/>}/>
      </Route>

      {/* Ana Route: Yönetici */}
      <Route path="/admin" element={<Admin />}>
        {/* Nested Route: Yönetici Ana Sayfa */}
        <Route path="adminHome" element={<AdminHome/>}/>

        {/* Nested Route: Yönetici Ürünleri */}
        <Route index path="" element={<AdminProduct/>}/>

        {/* Nested Route: Yönetici Ürün Ekleme */}
        <Route path="adminAddProduct" element={<AdminAddProduct/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
</div>
```


- path özelliği, belirli bir URL yoluyla eşleşen rotayı belirtir.
- element özelliği, eşleşen rotanın karşılık gelen bileşeni veya bileşen ağacını temsil eder.
- index özelliği, nested route'un ana bileşeni olmasını belirtir. Yani, path="" ile tanımlanan rotaya erişildiğinde bu bileşen gösterilir.
Örneğin, /user yolu eşleştiğinde <User> bileşeni gösterilir ve içinde iki adet nested route bulunur: path="" (index) olan route <UserHome> bileşenini, path="userProduct" olan route ise <UserProduct> bileşenini gösterir. Benzer şekilde, /admin yolu eşleştiğinde <Admin> bileşeni gösterilir ve içindeki nested routelar belirtilen bileşenleri gösterir.
