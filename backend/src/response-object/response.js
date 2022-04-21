class Response {
  constructor(res) {
    this.res = res;
    this.status = "OK";
    this.statusCode = 200;
  }

  setResult(result) {
    this.result = result
    return this;
  }

  send(message) {
    const resObj = {
      status: this.status,
      message: message,
      statusCode: this.statusCode,
      result: this.result
    };

    this.res.status(this.statusCode).send(resObj)
  }
}

class SuccessResposne extends Response {

}

class CreatedResponse extends Response {
  constructor(res) {
    super(res);
    this.statusCode = 201;
    this.status = "Created";
  }
}

class NotFoundResponse extends Response {
  constructor(res) {
    super(res);
    this.statusCode = 404;
    this.status = "Not Found";
  }

  send(message = "Not found!") {
    super.send(message);
  }
}

class BadRequestResponse extends Response {
  constructor(res) {
    super(res);
    this.statusCode = 400;
    this.status = "Bad Request";
  }

  send(message = "Bad Request!") {
    super.send(message);
  }
}

module.exports = {
  SuccessResposne,
  CreatedResponse,
  NotFoundResponse,
  BadRequestResponse
}