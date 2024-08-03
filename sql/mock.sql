-- Create the products table
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL
);

-- Create the ratings table
CREATE TABLE ratings (
    rating_id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(product_id),
    user_id INTEGER NOT NULL, -- Assuming you have a users table
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert mock data into products table
INSERT INTO products (name, description, price) VALUES
('Smartphone X', 'Latest model with advanced features', 999.99),
('Laptop Pro', 'High-performance laptop for professionals', 1499.99),
('Wireless Earbuds', 'True wireless earbuds with noise cancellation', 149.99),
('Smart Watch', 'Fitness tracker with heart rate monitor', 199.99),
('4K TV', '55-inch 4K Smart TV with HDR', 699.99),
('Gaming Console', 'Next-gen gaming console with 4K graphics', 499.99),
('Bluetooth Speaker', 'Portable waterproof speaker', 79.99),
('Tablet Ultra', '10-inch tablet with stylus support', 399.99),
('Digital Camera', 'Mirrorless camera with 4K video', 899.99),
('Robot Vacuum', 'Smart robot vacuum with mapping technology', 299.99);

-- Insert mock data into ratings table
INSERT INTO ratings (product_id, user_id, rating, comment) VALUES
(1, 1, 5, 'Excellent smartphone, very fast!'),
(1, 2, 4, 'Good phone, but battery life could be better'),
(2, 3, 5, 'Perfect for my work needs'),
(2, 4, 4, 'Great laptop, a bit pricey though'),
(3, 5, 3, 'Decent sound quality, uncomfortable for long use'),
(4, 6, 5, 'Love the fitness features!'),
(5, 7, 4, 'Great picture quality, smart features are handy'),
(6, 8, 5, 'Amazing graphics and game selection'),
(7, 9, 4, 'Good sound for its size, very portable'),
(8, 10, 4, 'Responsive tablet, stylus works well'),
(9, 1, 5, 'Fantastic image quality, easy to use'),
(10, 2, 4, 'Cleans well, sometimes gets stuck under furniture');