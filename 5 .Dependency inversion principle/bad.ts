class xmlHttpRequestService {}

// Low level
class xmlHttpService extends xmlHttpRequestService {
  request(url: string, type: string) {}
}

// High level module
class Http {
  constructor(private xmlHttpService: xmlHttpService) {}

  get(url: string, options: any) {
    this.xmlHttpService.request(url, "GET");
  }

  post(url: string) {
    this.xmlHttpService.request(url, "POST");
  }
}
