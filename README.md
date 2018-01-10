# GlueStick Example Living Inside Rails
This is an example of how you could build your GlueStick application along side a Rails application. While this is not the most common way to build a GlueStick application it may be useful for simplifying deployments.

*This does not work with server side rendering and therefore gsBeforeRoute is no longer reliable*

# Usage
- During development you can kick off the frontend application with `rails start_frontend`.
- For deployments you would use `rails build_frontend`

