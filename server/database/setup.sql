DROP TABLE IF EXISTS theatre_plays;

-- Create the table
CREATE TABLE theatre_plays (
    play_id SERIAL PRIMARY KEY,
    play_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    date_played DATE NOT NULL,
    time_played TIME NOT NULL,
    duration INTERVAL NOT NULL,
    cover_photo VARCHAR(200) NOT NULL
);

-- Insert sample records
INSERT INTO theatre_plays (play_name, price, date_played, time_played, duration, cover_photo)
VALUES
    ('Romeo and Juliet', 25.00, '2023-07-01', '19:00:00', '2 hours', 'romeo_juliet.jpg'),
    ('Hamlet', 30.50, '2023-07-03', '20:30:00', '2 hours 30 minutes', 'hamlet.jpg'),
    ('The Importance of Being Earnest', 20.00, '2023-07-05', '18:45:00', '2 hours 15 minutes', 'importance_earnest.jpg'),
    ('A Midsummer Night\'s Dream', 22.00, '2023-07-07', '19:15:00', '2 hours 20 minutes', 'midsummer_nights_dream.jpg'),
    ('Macbeth', 28.75, '2023-07-09', '20:00:00', '2 hours 10 minutes', 'macbeth.jpg');