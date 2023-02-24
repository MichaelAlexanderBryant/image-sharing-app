import http from "../http-common";

class ImageDataService {
  getAll() {
    return http.get("/");
  }

  get(id) {
    return http.get(`/${id}`);
  }
}

export default ImageDataService;
