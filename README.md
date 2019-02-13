# README


##  usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|group_id|integer|null: false|
|email|string|null: false, unique: true|
|encrypted_password|string|null: false, unique:true|
|name|varcher|null: false|

### Association
- has_many :groups, through: members
- has_many :members



##  groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :users, through :members
- has_many :members


## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :groups
- belongs_to :users
- has_many :messages


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|image|string|
|body|text|

### Association
- belongs_to :members
- belongs_to :users, through :members
