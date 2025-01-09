import http.server
import socketserver
import mimetypes

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def guess_type(self, path):
        mime_type, encoding = mimetypes.guess_type(path)
        # Ensure JavaScript files are served with application/javascript MIME type
        if path.endswith('.js'):
            mime_type = 'application/javascript'
        return mime_type

PORT = 8000
Handler = CustomHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()
