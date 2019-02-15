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
- has_many :groups
- has_many :messages



##  groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :users
- has_many :messages




## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|image|string|
|body|text|

### Association
- belongs_to :groups
- belongs_to :users
