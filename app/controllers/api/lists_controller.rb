class Api::ListsController < ApplicationController
  before_action :require_logged_in
  def create
    @list = List.new(list_params)
    @list.user = currentUser

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

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    # render ???WHAT TO RENDER???
  end

  private

  def list_params
    params.require(:list).pemit(:title)
  end
end
