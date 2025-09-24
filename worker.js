export default {
  async fetch(request) {
    const url = new URL(request.url);
    url.hostname = "chirimen.org";
    return Response.redirect(url.toString());
  },
};
