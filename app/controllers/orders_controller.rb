class OrdersController < ApplicationController

    def index
        orders = Order.all
        render json: orders
    end
    def create
        # order =Order.create!(order_params)
        # render json: order, status: :created
        params[:drinks].each do |drink|
            Order.create!(drink_id: drink[:id], customer_id: params[:customer])
        end
    end
    
    
       private
    
       def order_params
        params.permit(:id)
       end
    
       def render_unprocessable_entity_response(error)
        render json: {errors: error.record.errors.full_messages}, status: :unprocessable_entity
    end


end
