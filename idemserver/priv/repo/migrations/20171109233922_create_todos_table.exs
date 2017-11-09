defmodule Idemserver.Repo.Migrations.CreateTodosTable do
  use Ecto.Migration

  def change do
    create table("todos") do
      add :description, :string, size: 255
      timestamps()
    end
  end
end
