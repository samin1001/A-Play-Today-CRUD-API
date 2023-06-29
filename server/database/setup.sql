DROP TABLE IF EXISTS theatre_plays;
DROP TABLE IF EXISTS users;

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
    ('Romeo and Juliet', 2500, '2023-06-29 09:30:00+00:00', 120, 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Romeo_%26_Juliet_%283640665883%29.jpg'),
    ('Hamlet', 3050, '2023-06-30 14:45:00+00:00', 150, 'https://d3s3zh7icgjwgd.cloudfront.net/AcuCustom/Sitename/DAM/233/3_Standard.-Hamlet.-George-Fouracres-as-Hamlet-front-Polly-Frame-a.jpg'),
    ('The Importance of Being Earnest', 2000, '2023-07-01 18:20:00+00:00', 135, 'https://upload.wikimedia.org/wikipedia/commons/c/c0/The_Importance_of_Being_Earnest_%2815424263443%29.jpg'),
    ('A Midsummer Night''s Dream', 2200, '2023-07-02 10:00:00+00:00', 140, 'https://ichef.bbci.co.uk/images/ic/1200xn/p0dtpyrj.jpg'),
    ('Macbeth', 2875, '2023-07-03 21:15:00+00:00', 130, 'https://www.indiewire.com/wp-content/uploads/2015/05/macbeth.jpg?w=685&h=478&crop=1');

    CREATE TABLE users(
    user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    pass_word VARCHAR(100) NOT NULL,
    isAdmin BOOLEAN DEFAULT false
);

INSERT INTO users(username, pass_word, isAdmin)
VALUES
    ('Achan15','$2y$10$097V6YXFoRutj1O42zr1XO2gRXOowekCFpzDewuCvQn8KRrbxVAhO',true),
    ('Salim1704', '$2y$10$kPwQ5gxsZU3m6K8qptJLA.N0yPT9olUWsKTTZdIElTXkTvwDN1Fly', true),
    ('Msamin000', '$2y$10$oPHQ4euAqhl6GpmjQ2To1eQXxAnn4upjLT4t9P0sZbRdo2AoEf2B2', false);