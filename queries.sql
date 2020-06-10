-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

select ProductName, CategoryName from product as p join Category as c on p.CategoryId = c.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT  o."Id", s.CompanyName FROM "Order" as o
JOIN "Shipper" as s
ON o."ShipVia" = s."Id"
WHERE o."OrderDate" < "2012-08-09"


-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT ProductName, Quantity FROM "OrderDetail" as od
JOIN "Product" as p

ON od."ProductId" = p."id"
WHERE od."OrderId" = 10251
ORDER BY "ProductName" ASC

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT o."Id" orderId, e."LastName" employeeLastName, c."CompanyName"customersCompanyName FROM "Order" as o
JOIN "Employee" as e
ON o."EmployeeId" = e."Id" 
JOIN "Customer" as c
ON o."CustomerId" = c."Id"




-- STRETCH 

SELECT CategoryName, Unit as count FROM [Categories] as c JOIN [Products] as p ON c.categoryid = p.categoryid

