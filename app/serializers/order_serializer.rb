class OrderSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :customer
  belongs_to :drink
end
