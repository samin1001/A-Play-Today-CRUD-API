DROP TABLE IF EXISTS theatre_plays;


CREATE TABLE theatre_plays(
    play_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    play_name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    date_time_played TIMESTAMPTZ NOT NULL,
    duration INT NOT NULL,
    cover_photo VARCHAR(200) NOT NULL
);


INSERT INTO theatre_plays(play_name, price, date_time_played, duration, cover_photo)
VALUES
    ('Romeo and Juliet', 2500, '2023-06-29 09:30:00+00:00', 120, 'romeo_juliet.jpg'),
    ('Hamlet', 3050, '2023-06-30 14:45:00+00:00', 150, 'hamlet.jpg'),
    ('The Importance of Being Earnest', 2000, '2023-07-01 18:20:00+00:00', 135, 'importance_earnest.jpg'),
    ('A Midsummer Night''s Dream', 2200, '2023-07-02 10:00:00+00:00', 140, 'midsummer_nights_dream.jpg'),
    ('Macbeth', 2875, '2023-07-03 21:15:00+00:00', 130, 'macbeth.jpg');