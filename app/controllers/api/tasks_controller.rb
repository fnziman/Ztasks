class Api::TasksController < ApllicationRecord
  def create
    @task = Task.new(task_params)
    # how to get task's list?
    if @task.save
      render :show
    else
      render json: @task.errors.full_messages
    end
  end

  def show
    @task = Task.find(params[:id])
  end

  def index
    @tasks = Task.all
    render :index
  end

  def edit
    @task = Task.find(params[:id])
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destory
    @task = Task.find(params[:id])
    @task.destroy
    render :show
  end

  private

  def task_params
    parmas.require(:task).permit(:title, :notes, :due_date, :time_estimate)
  end
end
