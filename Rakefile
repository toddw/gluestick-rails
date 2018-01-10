# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

desc "Start GlueStick frontend for development"
task :start_frontend do
  sh "cd frontend && gluestick start"
end

desc "Create GlueStick static build for production"
task :build_frontend do
  sh "cd frontend && NODE_ENV=production gluestick build --static"
end

