git_source(:github) { |name| "https://github.com/#{name}.git" }
source "https://rubygems.org"
ruby File.read(File.join(File.dirname(__FILE__), ".ruby-version")).strip

gem "jekyll", "~> 4.3.3"

gem "minima", github: "jekyll/minima", ref: "1d5286c"

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", platforms:[:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
