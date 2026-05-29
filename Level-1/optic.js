
db.Suppliers.insertOne({
  _id: 1,
  supplier_name: "Luxxotica",
  address: {
   street: "avenida diagonal",
   street_number: 536,
   floor: 6,
   door: "A",
   city: "Barcelona",
   postal_code: "08031",
   country: "España"
  },
  phone_number: "675764054",
  fax: "934567890",
  nif: "X1234567Z"
})

db.Brands.insertOne({
  _id: 1,
  brand_name: "RayBan",
  supplier_id: 1
})

db.Glasses.insertOne({
  _id: 1,
  brand_id: 1,
  frame_type: "Metallic",
  frame_color: "Rojo",
  left_eye_prescription: 2.3,
  right_eye_prescription: 2.0,
  left_lens_color: "pink",
  right_lens_color: "pink",
  price: 120.00
})


db.Customers.insertOne({
  _id: 1,
  customer_name: "Juan",
  customer_last_names: "Perez Castillo",
  address: {
    street: "calle Berlin",
    street_number: "56",
    floor: "3",
    door: "B",
    city: "Barcelona",
    postal_code: "08028",
    country: "España",
  },
  phone_number: "689863052",
  email: "juan124@gmail.com",
  customer_record_date: new Date(),
  referrer_customer_id: 2
})

db.Employees.insertOne({
  _id: 1,
  employee_name: "Laura",
  employee_last_names: "Torres Vasquez"
})

db.Sales.insertOne({
  _id: 1,
  employee_id: 1,
  customer_id: 1,
  sale_date: new Date(),
  total_price: 240.00,
  items: [
    {
      glasses_id: 1,
      quantity: 2,
      unit_price: 120.00,
    }
  ]
})

db.Suppliers.createIndex({nif: 1, "address.country": 1}, {unique: true})
db.Brands.createIndex({brand_name: 1}, {unique: true})
db.Customers.createIndex({email: 1}, {unique: true})