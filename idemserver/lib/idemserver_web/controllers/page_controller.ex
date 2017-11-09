defmodule IdemserverWeb.PageController do
  use IdemserverWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
