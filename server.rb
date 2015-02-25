require "sinatra"
require "csv"

get "/articles" do
  erb :index, locals: { articles: list_articles, errors: [] }
end

post "/articles" do
  errors = input_errors(params[:title], params[:url])

  if errors.empty?
    add_article(params[:title], params[:url])
    redirect "/articles"
  else
    erb :index, locals: { articles: list_articles, errors: errors }
  end
end

def list_articles
  CSV.read("articles.csv").map do |row|
    { title: row[0], url: row[1] }
  end
end

def input_errors(title, url)
  errors = []

  if title.nil? || title.empty?
    errors << "Title cannot be blank"
  end

  if url.nil? || url.empty?
    errors << "URL cannot be blank"
  elsif !url.start_with?("http")
    errors << "URL must start with http(s)"
  end

  errors
end

def add_article(title, url)
  CSV.open("articles.csv", "a") do |csv|
    csv << [title, url]
  end
end
