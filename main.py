from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
import os
from google.appengine.ext.webapp import template

class NotFoundPageHandler(webapp.RequestHandler):
    def get(self):
        # self.error(404)
        path = os.path.join(os.path.dirname(__file__), 'build/index.html')
        self.response.out.write(template.render(path, {}))
        # self.redirect("/")
        # self.response.out.write('<Your 404 error html page>')

application = webapp.WSGIApplication([('/.*', NotFoundPageHandler)],
                                     debug=True)

def main():
    run_wsgi_app(application)

# main()
if __name__ == "__main__":
    main()


# def handle_404(request, response, exception):
#     logging.warn(str(exception))
#     response.set_status(404)
#     h = YourAppBaseHandler(request, response)
#     h.render_template('notfound')
#
# def handle_500(request, response, exception):
#     logging.error(str(exception))
#     response.set_status(500)
#     h = YourAppBaseHandler(request, response)
#     h.render_template('servererror')
#
# app = webapp2.WSGIApplication([
#     webapp2.Route('/', MainHandler, name='home')
#     ], debug=True)
# app.error_handlers[404] = handle_404
# app.error_handlers[500] = handle_500
#
# application = webapp2.WSGIApplication([
#     webapp2.Route('/hello', webapp2.RedirectHandler, defaults={'_uri':'http://domain.com'}),
#     webapp2.Route('/hello28928723', webapp2.RedirectHandler, defaults={'_uri':'http://domain.com'}),
# ], debug=False)