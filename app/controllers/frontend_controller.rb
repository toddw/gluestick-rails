class FrontendController < ApplicationController
  def index
    render file: Rails.root.join("frontend", "build", "static", "main.html"), layout: false
  end
end
