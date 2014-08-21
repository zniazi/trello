module Api
  class ItemsController < ApiController
    def index
      render json: Card.find(params[:card_id]).items
    end

    def create
      @item = current_card.items.new(item_params)

      if @item.save
        render json: @item
      else
        render json: @item.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @item = Item.find(params[:id])
      if @item.update(item_params)
        render json: @item
      else
        render json: @item.errors.full_messages,
               status: :unprocessable_entity
      end
    end

    private

    def current_card
      if params[:id]
        @item = Item.find(params[:id])
        @card = @item.card
      elsif params[:item]
        @card = Card.find(params[:item][:card_id])
      end
    end

    def current_list
      current_card.list
    end

    def current_board
      current_list.board
    end

    def item_params
      params.require(:item).permit(:title, :card_id, :done)
    end
  end
end
