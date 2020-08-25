from flask import render_template, request, send_from_directory
from recipe_scrapers import scrape_me
import flask, sys, os

app = flask.Flask("__name__")

@app.route("/static/<path:path>")
def static_files():
  return send_from_directory("js", path)

@app.route("/", methods=["GET"])
def home():
    return render_template("index.html")

@app.route("/api/handleUrl", methods=["GET"])
def handleUrl():
    url = request.args.get("text")
    scraper = scrape_me(url)
    title = scraper.title()
    ingredients = scraper.ingredients()
    return f"<b>{title}</b></br>{'</br>'.join(ingredients)}</br></br>"

app.run()
