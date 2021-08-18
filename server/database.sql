
create TABLE author(
    id UUID PRIMARY KEY,
    username VARCHAR(32),
    profile_pic_url VARCHAR
);

create TABLE post(
    id UUID PRIMARY KEY,
    author_id INT,
    image_url VARCHAR,
	date_created TIMESTAMPTZ,
    likes_num VARCHAR,
    likes_id VARCHAR[],
    FOREIGN KEY (author_id) REFERENCES user_data (id)
);
