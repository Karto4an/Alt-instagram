
create TABLE author(
    id UUID PRIMARY KEY,
    username VARCHAR(32),
    profile_pic_url VARCHAR
);

create TABLE post(
    id UUID PRIMARY KEY,
    userid UUID,
    image_url VARCHAR,
    likes VARCHAR,
    FOREIGN KEY (userid) REFERENCES author (id)
);
