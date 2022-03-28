class CustomersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

   def index
    customers = Customer.all
    render json: customers
   end

   def create
    customer =Customer.create!(customer_params)
    render json: customer, status: :created
   end


   private

   def customer_params
    params.permit(:name)
   end

   def render_unprocessable_entity_response(error)
    render json: {errors: error.record.errors.full_messages}, status: :unprocessable_entity
end


end