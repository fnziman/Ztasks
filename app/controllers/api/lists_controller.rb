class Api::ListsController < ApplicationController
  before_action :require_logged_in
  def create
    @list = List.new(list_params)
    @list.user = current_user
    if @list.save
      render :show
    else
      render json: @list.errors.full_messages
    end
  end

  def show
    @list = List.find(params[:id])
  end

  def index
    @lists = List.all
    render :index
  end

  def update
    @list = List.find(params[:id])
    if @list.update(list_params)
      render json: @list
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    render :show
  end

  private

  def list_params
    params.require(:list).permit(:title)
  end
end
