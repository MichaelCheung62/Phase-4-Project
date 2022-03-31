class Customer < ApplicationRecord

    has_many :orders, dependent: :destroy
    has_many :drinks, through: :orders
end
