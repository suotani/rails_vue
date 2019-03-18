# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Enemy.create(name: "スライム", hp: 100, power: 10, magic_power: 10, magic_point: 10, skill_power: 20)
Enemy.create(name: "骸骨剣士", hp: 150, power: 20, magic_power: 15, magic_point: 20, skill_power: 50)
Enemy.create(name: "ゾンビドック", hp: 200, power: 50, magic_power: 10, magic_point: 10, skill_power: 60)
Enemy.create(name: "魔術師", hp: 180, power: 20, magic_power: 80, magic_point: 50, skill_power: 90)
Enemy.create(name: "ゴーレム", hp: 500, power: 50, magic_power: 50, magic_point: 30, skill_power: 80)
Enemy.create(name: "ドラゴン", hp: 800, power: 80, magic_power: 100, magic_point: 50, skill_power: 100)
