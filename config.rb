# Require any additional compass plugins here.
require 'gridle';
require 'bootstrap-sass';

# require "compass_radix";
require File.join(File.dirname(__FILE__), 'public/extensions/css_splitter/css_splitter.rb');

# Set environment [development, production]
environment = :production

# Set this to the root of your project when deployed:
http_path = "public/"
css_dir = "public/css"
sass_dir = "public/sass"
images_dir = "public/img"
fonts_dir = "public/fonts"
javascripts_dir = "public/js"
extensions_dir = "public/extensions"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = (environment == :development) ? :expanded : :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = (environment == :development) ? true : false

sass_options = {:sourcemap => true}

enable_sourcemaps = true

asset_cache_buster :none

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

# Split css files if it goes over IE's 4095 limit.
on_stylesheet_saved do |path|
  CssSplitter.split(path) unless path[/\d+$/]
end

